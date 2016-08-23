using DAL.DataContext;
using DAL.Identity;
using DAL.Interfaces;
using DAL.Repositories;
using Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationContext db;

        private UserManager userManager;
        private RoleManager roleManager;
        private IClientManager clientManager;

        public UnitOfWork(string connectionString)
        {
            db = new ApplicationContext(connectionString);
            userManager = new UserManager(new UserStore<User>(db));
            roleManager = new RoleManager(new RoleStore<Role>(db));
            clientManager = new ClientManager(db);
        }

        public UserManager UserManager
        {
            get { return userManager; }
        }

        public IClientManager ClientManager
        {
            get { return clientManager; }
        }

        public RoleManager RoleManager
        {
            get { return roleManager; }
        }

        public async Task SaveAsync()
        {
            await db.SaveChangesAsync();
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
                    clientManager.Dispose();
                }
                this.disposed = true;
            }
        }
    }
}
