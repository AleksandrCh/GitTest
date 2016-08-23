using DAL.DataContext;
using DAL.Identity;
using DAL.Interfaces;
using DAL.Repositories;
using Domain.Entities;
using Domain.Interfaces.Repository;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _dbContext;

        private UserManager userManager;
        private RoleManager roleManager;
        private IGenericRepository<ClientProfile> clientRepository;

        public UnitOfWork(DbContext dbContext)
        {
            _dbContext = dbContext;

            userManager = new UserManager(new UserStore<User>(_dbContext));
            roleManager = new RoleManager(new RoleStore<Role>(_dbContext));
        }

        public UserManager UserManager
        {
            get { return userManager; }
        }

        public IGenericRepository<ClientProfile> Client
        {
            get { return clientRepository; }
        }

        public RoleManager RoleManager
        {
            get { return roleManager; }
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
                    userManager.Dispose();
                    roleManager.Dispose();
                    clientRepository.Dispose();
                }
                this.disposed = true;
            }
        }
    }
}
