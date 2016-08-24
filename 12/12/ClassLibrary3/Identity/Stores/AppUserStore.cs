using BLL.Interfaces.Stores;
using DAL.DataContext;
using Domain.Entities;
using System;
using System.Data.Entity;
using System.Threading.Tasks;

namespace BLL.Identity.Stores
{
    public class AppUserStore : IAppUserStore
    {
        //private IDbSet<User> _users;
        //private ApplicationContext _context;
        //public AppUserStore(ApplicationContext context)
        //{
       //     _users = context.Users;
       //     _context = context;
       // }

        public Task CreateAsync(User user)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(User user)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
          //  _users = null;
           // _context.Dispose();
        }

        public Task<User> FindByIdAsync(string userId)
        {
            throw new NotImplementedException();
        }

        public Task<User> FindByNameAsync(string userName)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(User user)
        {
            throw new NotImplementedException();
        }
    }
}
