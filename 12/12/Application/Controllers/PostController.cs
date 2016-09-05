using Application.Models.PostModels;
using BLL.DTO;
using BLL.Infrastructure;
using BLL.Intefaces;
using Domain.Entities;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Application.Controllers
{
    public class PostController : Controller
    {
        private IPostService _postService;
        private ICategoryService _categoryService;
        private ITagService _tagService;
        private ICommentService _commentService;
        private IUserService _userService;

        private IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

        public PostController(
            IPostService postService,
            ICategoryService categoryService,
            ITagService tagService,
            ICommentService commentService,
            IUserService userService)
        {
            _postService = postService;
            _categoryService = categoryService;
            _tagService = tagService;
            _commentService = commentService;
            _userService = userService;
        }

        public ActionResult Index()
        {
            ListViewModel model = new ListViewModel();
            model.Posts = _postService.GetUserPosts(AuthenticationManager.User.Claims.ElementAt(0).Value).ToList();
            ModelState.AddModelError("", "Пользователь не найден");
            return View(model);
        }

        [Authorize(Roles ="admin, user")]
        public ActionResult Create()
        {
            var categories = _categoryService.GetCategories();
            var categoryList = new List<CategoryViewModel>();

            if (categories != null)
            {
                foreach (var item in categories)
                {
                    CategoryViewModel model = new CategoryViewModel
                    {
                        Id = item.Id,
                        Name = item.Name
                    };
                    categoryList.Add(model);
                }
            }
            ViewBag.Categories = categoryList;

            return View();
        }

        [HttpPost]
        [Authorize(Roles = "admin, user")]
        [ValidateInput(false)]
        public async Task<ActionResult> Create(CreatePostViewModel model)
        {
            Post post = CreatePostViewModel.GetDomainModel(model, AuthenticationManager.User.Claims.ElementAt(0).Value);

            await _postService.CreatePost(post);
            return RedirectToAction("Index", "Post");
        }

        [AllowAnonymous]
        public async Task<ActionResult> Open(int postId)
        {
            OpenPostViewModel model = new OpenPostViewModel();
            model.CommentsViewModel = new List<CommentViewModel>();
            var post = _postService.GetPostById(postId);
            if (post == null)
            {
                ModelState.AddModelError("", "Пост не найден");
                return View("error");
            }

            var user =await _userService.FindByIdAsync(post.UserId);
            PostViewModel postModel = new PostViewModel()
            {
                Title = post.Title,
                Description = post.Description,
                AddedOn = post.AddedOn,
                Author = user.Email,
                Likes = post.Likes
            };
            var comments = _commentService.GetCommentsByPostId(postId);
            if (comments != null)
            {
                foreach (var item in comments)
                {
                    var commentAuthor = await _userService.FindByIdAsync(item.UserId);
                    CommentViewModel commentViewModel = new CommentViewModel
                    {
                        Author = commentAuthor.Email,
                        Text = item.Text
                    };
                    model.CommentsViewModel.Add(commentViewModel);
                }
            }
 
            model.PostId = postId;
            model.PostViewModel = postModel;
            return View("Open", model);
        }

        [Authorize(Roles = "admin, user")]
        public async Task<ActionResult> AddComment(OpenPostViewModel model, int postId)
        {
            CommentDTO commentDTO = new CommentDTO
            {
                Text = model.CommentText,
                PostId = postId,
                UserId = AuthenticationManager.User.Claims.ElementAt(0).Value
            };

            OperationDetails result = await _commentService.AddComment(commentDTO);
            if (result.Succedeed)
            {
                IEnumerable<Comment> comments = _commentService.GetCommentsByPostId(postId);
                if (comments != null)
                {
                    model.CommentsViewModel = new List<CommentViewModel>();
                    foreach (var item in comments)
                    {
                        var commentAuthor = await _userService.FindByIdAsync(item.UserId);
                        CommentViewModel commentViewModel = new CommentViewModel
                        {
                            Author = commentAuthor.Email,
                            Text = item.Text
                        };
                        model.CommentsViewModel.Add(commentViewModel);
                    }
                }
                return PartialView("_CommentsPartial", model);
            }
            ModelState.AddModelError(result.Property, result.Message);
            return PartialView("_CommentsPartial", model);
        }

        [Authorize(Roles = "admin, user")]
        public async Task<ActionResult> PutLike(OpenPostViewModel model, int postId)
        {
            await _postService.PutLike(postId);
            var post = _postService.GetPostById(postId);
            
            PostViewModel postModel = new PostViewModel()
            {
                Likes = post.Likes
            };
            model.PostViewModel = postModel;
            return PartialView("_LikeCountPartial", model);
        }

        [Authorize(Roles = "admin, user")]
        public async Task<ActionResult> DeletePost(int postId)
        {
            string userId = AuthenticationManager.User.Claims.ElementAt(0).Value;
            OperationDetails result = await _postService.DeletePost(postId, userId);
            if (result.Succedeed)
            {
                return RedirectToAction("Index");
            }

            ViewBag.Error = result.Message;
            return View("Index");
        }

        [Authorize(Roles = "admin, user")]
        [ValidateInput(false)]
        public ActionResult EditPost(int postId)
        {
            Post post = _postService.GetPostById(postId);
            if (post != null)
            {
                EditPostViewModel model = new EditPostViewModel
                {
                    Id = postId,
                    Title = post.Title,
                    Description = post.Description,
                    ShortDescription = post.ShortDescription,
                    Category = post.CategoryId
                };

                var categories = _categoryService.GetCategories();
                var categoryList = new List<CategoryViewModel>();

                if (categories != null)
                {
                    foreach (var item in categories)
                    {
                        CategoryViewModel categoryViewModel = new CategoryViewModel
                        {
                            Id = item.Id,
                            Name = item.Name
                        };
                        categoryList.Add(categoryViewModel);
                    }
                }
                ViewBag.Categories = categoryList;

                return View("EditPost", model);
            }

            ModelState.AddModelError("Пост не найден", "postNotFount");
            return View("Edit");
        }

        [HttpPost]
        [Authorize(Roles = "admin, user")]
        [ValidateInput(false)]
        public async Task<ActionResult> EditPost(EditPostViewModel model)
        {
            Post post = _postService.GetPostById(model.Id);
            post.Title = model.Title;
            post.ShortDescription = model.ShortDescription;
            post.Description = model.Description;
            post.AddedOn = DateTime.Today;
            post.CategoryId = model.Category;

            await _postService.UpdatePost(post);
            return RedirectToAction("Index", "Post");
        }
    }
}