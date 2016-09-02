using BLL.Intefaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Application.Models.PostModels
{
    public class ListViewModel
    {
        public IList<Post> Posts { get; set; }
        public IList<Category> Category { get; set; }

        public ListViewModel()
        {
            Posts = new List<Post>();
        }

        public static ListViewModel GetViewModel(IList<Post> posts, IList<Category> category)
        {
            return new ListViewModel
            {

            };
        }
    }
}