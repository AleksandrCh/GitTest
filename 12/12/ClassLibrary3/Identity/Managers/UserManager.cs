using BLL.Interfaces;
using BLL.Interfaces.Stores;
using Domain.Entities;
using Microsoft.AspNet.Identity;

namespace BLL.Identity
{
    public class UserManager : UserManager<User>
    {
        public UserManager(IAppUserStore store)
                : base(store)
        {
        }
    }
}
