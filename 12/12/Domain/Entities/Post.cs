using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string ShortTitle { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string ShortDescription { get; set; }

        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

        public ICollection<Tag> Tags { get; set; }
        public Post()
        {
            Tags = new List<Tag>();
        }
    }
}
