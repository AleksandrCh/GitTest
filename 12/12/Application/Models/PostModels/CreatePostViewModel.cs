using Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Application.Models.PostModels
{
    public class CreatePostViewModel
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string ShortTitle { get; set; }
        [Required]
        public string Category { get; set; } 
        [Required]
        public IEnumerable<Tag> Tags { get; set; }
        [Required]
        public string ShortDescription { get; set; }
        [Required]
        public string Description { get; set; }

        public static CreatePostViewModel GetViewModel(Post domainModel)
        {
            return new CreatePostViewModel
            {
                Title = domainModel.Title,
                ShortTitle = domainModel.ShortTitle,
                ShortDescription = domainModel.ShortDescription,
                Description = domainModel.Description
            };
        }

        /*public static Post GetDomainModel(CreatePostViewModel model)
        {
            return new Post
            {
                ShortTitle = model.ShortTitle,
                Title = model.Title,
                ShortDescription = model.ShortDescription,
                Description = model.Description,
                Published = false,
                AddedOn = DateTime.Now,
                Author = user.FirstName + user.LastName == null ? " " + user.LastName : "",
                User = user,
                CategoryId = model.CategoryId,
            };
        }*/
    }
}