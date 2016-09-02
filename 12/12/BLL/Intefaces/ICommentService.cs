using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Intefaces
{
    public interface ICommentService
    {
        IEnumerable<Comment> GetComments();
    }
}
