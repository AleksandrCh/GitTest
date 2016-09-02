using Domain.Entities;
using System;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<Category> Categories { get; }
        IGenericRepository<Post> Posts { get; }
        IGenericRepository<Tag> Tags { get; }
        IGenericRepository<Comment> Comments { get; }

        Task SaveAsync();
        void Dispose(bool disposing);
    }
}
