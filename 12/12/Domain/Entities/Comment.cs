using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }

        public int PostId { get; set; }
        public virtual Post Post { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
