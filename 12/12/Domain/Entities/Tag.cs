using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class Tag
    {
        public int Id { get; set; }
        [Required]
        public int Name { get; set; }

        public ICollection<Post>  Posts{ get; set; }
        public Tag()
        {
            Posts = new List<Post>();
        }
    }
}
