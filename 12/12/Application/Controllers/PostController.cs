using Application.Models.PostModels;
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
            IUserService userService)
        {
            _postService = postService;
            _categoryService = categoryService;
            _tagService = tagService;
            _userService = userService;
        }

        public async Task<ActionResult> Index()
        {
            ListViewModel model = new ListViewModel();
            var user = await _userService.FindByNameAsync(AuthenticationManager.User.Identity.Name);
            string id = user.Id.ToString();
            if (user != null)
            {
                model.Posts = _postService.GetUserPosts(id).ToList();
            }
            ModelState.AddModelError("", "Пользователь не наёден");
            return View(model);
        }

        [Authorize(Roles ="admin, user")]
        public ActionResult Create()
        {
            var categories = _categoryService.GetCategories();
            List<string> list = new List<string>();
            if (categories != null)
            {
                foreach (var item in categories)
                {
                    list.Add(item.Name);
                }
            }

            ViewBag.Categories = list;

            return View();
        }

        [HttpPost]
        [Authorize(Roles = "admin, user")]
        [ValidateInput(false)]
        public async Task<ActionResult> Create(CreatePostViewModel model)
        {
            var user = await _userService.FindByNameAsync(AuthenticationManager.User.Identity.Name);
            if (user != null)
            {
                Category category = _categoryService.GetCategories()
                    .Where(p => p.Name == model.Category)
                    .FirstOrDefault();

                if (category != null)
                {
                    Post post = new Post
                    {
                        ShortTitle = model.ShortTitle,
                        Title = model.Title,
                        ShortDescription = model.ShortDescription,
                        Description = model.Description,
                        Published = false,
                        AddedOn = DateTime.Now,
                        Author = user.FirstName + user.LastName == null ? " " + user.LastName : "",
                        User = user,
                        Category = category,
                    };

                    await _postService.CreatePost(post);
                    return View("Index");
                }
                ModelState.AddModelError("", "Нет такой категории");
                return View(model);
            }
            ModelState.AddModelError("", "Не найден пользователь");
            return View(model);
        }

        [AllowAnonymous]
        public ActionResult Open(int postId)
        {
            var post = _postService.GetPostById(postId);
            if (post == null)
            {
                ModelState.AddModelError("", "Пост не найден");
                return View("error");
            }
            PostViewModel model = new PostViewModel()
            {
                Title = post.Title,
                Description = post.Description,
                AddedOn = post.AddedOn,
                Author = post.Author 
            };
            return View("Open", model);
        }
    }
}