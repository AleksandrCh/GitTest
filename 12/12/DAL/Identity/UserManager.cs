using Domain.Entities;
using Microsoft.AspNet.Identity;

namespace DAL.Identity
{
    public class UserManager : UserManager<User>
    {
        public UserManager(IUserStore<User> store)
                : base(store)
        {
        }
    }
}
