using Application.Models.PostModels;
using BLL.Intefaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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
        public ActionResult Index()
        {
            ListViewModel model = new ListViewModel();
            model.Posts = _postService.GetPosts().ToList<Post>();
            model.Category = _categoryService.GetCategories().ToList();

            return View(model);
        }

        public ViewResult Category(int categoryId)
        {
            ListViewModel model = new ListViewModel();
            model.Posts = _postService.GetPostsFromCategory(categoryId).ToList<Post>();
            model.Category = _categoryService.GetCategories().ToList();

            return View("Index", model);
        }
    }
}