using Domain.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Identity
{
    public class RoleManager : RoleManager<Role>
    {
        public RoleManager(RoleStore<Role> store)
                    : base(store)
        { }
    }
}
