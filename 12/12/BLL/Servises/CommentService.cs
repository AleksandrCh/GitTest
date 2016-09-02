using BLL.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Interfaces;

namespace BLL.Servises
{
    public class CommentService : ICommentService
    {
        private IUnitOfWork _uow;

        public CommentService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public IEnumerable<Comment> GetComments()
        {
            return _uow.Comments.GetAll().ToArray();
        }
    }
}
