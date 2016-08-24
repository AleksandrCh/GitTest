using Domain.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BLL.Identity
{
    public class RoleManager : RoleManager<Role>
    {
        public RoleManager(RoleStore<Role> store)
                    : base(store)
        { }
    }
}
