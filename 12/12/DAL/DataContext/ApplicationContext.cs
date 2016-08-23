using DAL.Interfaces;
using Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace DAL.DataContext
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public ApplicationContext() : base("DefaultConnection") { }

        public DbSet<ClientProfile> ClientProfiles { get; set; }
    }
}
