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
        public int Category { get; set; } 
        [Required]
        public IEnumerable<TagViewModel> Tags { get; set; }
        [Required]
        public string ShortDescription { get; set; }
        [Required]
        public string Description { get; set; }

        public static CreatePostViewModel GetViewModel(Post domainModel)
        {
            return new CreatePostViewModel
            {
                Title = domainModel.Title,
                ShortDescription = domainModel.ShortDescription,
                Description = domainModel.Description
            };
        }

        public static Post GetDomainModel(CreatePostViewModel model, string userId)
        {
            return new Post
            {
                Title = model.Title,
                ShortDescription = model.ShortDescription,
                Description = model.Description,
                Published = false,
                AddedOn = DateTime.Today,
                UserId = userId,
                CategoryId = model.Category
            };
        }
    }
}