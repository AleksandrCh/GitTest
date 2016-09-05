using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.DTO
{
    public class CommentDTO
    {
        public string Text { get; set; }
        public int PostId { get; set; }
        public string UserId { get; set; }
    }
}
