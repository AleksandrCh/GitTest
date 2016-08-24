using DAL.Interfaces;
using DAL.Repositories;
using Domain.Entities;
using Domain.Interfaces.Repository;
using System;
using System.Data.Entity;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _dbContext;

        private IGenericRepository<ClientProfile> _clientRepository;

        public UnitOfWork(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IGenericRepository<ClientProfile> Clients
        {
            get
            {
                if (_clientRepository == null)
                {
                    _clientRepository = new GenericRepository<ClientProfile>(_dbContext);
                }
                return _clientRepository;
            }
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
