using Application.Models.PostModels;
using BLL.Intefaces;
using Domain.Entities;
using System.Linq;
using System.Web.Mvc;

namespace Application.Controllers
{
    public class HomeController : Controller
    {
        private IPostService _postService;
        private ICategoryService _categoryService;
        private ITagService _tagService;

        public HomeController(
            IPostService postService,
            ICategoryService categoryService,
            ITagService tagService)
        {
            _postService = postService;
            _categoryService = categoryService;
            _tagService = tagService;
        }

        [AllowAnonymous]
        public ActionResult Index(string filter)
        {
            ListViewModel model = new ListViewModel();
            model.Posts = _postService.GetPosts()
                .OrderByDescending(m => m.AddedOn).ToList<Post>();
            model.Category = _categoryService.GetCategories().ToList();

            if (filter != null)
            {
                switch (filter)
                {
                    case "DateDesc":
                        model.Posts = model.Posts.OrderByDescending(m => m.AddedOn).ToList();
                        break;
                    case "Date":
                        model.Posts = model.Posts.OrderBy(m => m.AddedOn).ToList();
                        break;
                    case "LikesDesc":
                        model.Posts = model.Posts.OrderByDescending(m => m.Likes).ToList();
                        break;
                    case "Likes":
                        model.Posts = model.Posts.OrderBy(m => m.Likes).ToList();
                        break;
                    default:
                        model.Posts = model.Posts.OrderByDescending(m => m.AddedOn).ToList();
                        break;
                }
            }

            return View(model);
        }

        [AllowAnonymous]
        public ViewResult Category(int categoryId)
        {
            ListViewModel model = new ListViewModel();
            model.Posts = _postService.GetPostsFromCategory(categoryId).ToList<Post>();
            model.Category = _categoryService.GetCategories().ToList();

            return View("Index", model);
        }
    }
}