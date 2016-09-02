using DAL.Repositories;
using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Data.Entity;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _dbContext;
        private IGenericRepository<Category> _categoryRepository;
        private IGenericRepository<Post> _postRepository;
        private IGenericRepository<Tag> _tagRepository;
        private IGenericRepository<Comment> _commentRepository;

        public IGenericRepository<Category> Categories
        {
            get
            {
                if (_categoryRepository == null)
                    _categoryRepository = new GenericRepository<Category>(_dbContext);
                return _categoryRepository;
            }
        }

        public IGenericRepository<Post> Posts
        {
            get
            {
                if (_postRepository == null)
                    _postRepository = new GenericRepository<Post>(_dbContext);
                return _postRepository;
            }
        }

        public IGenericRepository<Tag> Tags
        {
            get
            {
                if (_tagRepository == null)
                    _tagRepository = new GenericRepository<Tag>(_dbContext);
                return _tagRepository;
            }
        }

        public IGenericRepository<Comment> Comments
        {
            get
            {
                if (_commentRepository == null)
                    _commentRepository = new GenericRepository<Comment>(_dbContext);
                return _commentRepository;
            }
        }

        public UnitOfWork(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task SaveAsync()
        {
            await _dbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                }
                this.disposed = true;
            }
        }
    }
}
