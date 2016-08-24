using DAL.DataInitializer;
using DAL.Interfaces;
using Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace DAL.DataContext
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public ApplicationContext() : base("DefaultConnection") {
            Database.SetInitializer(new ApplicationDbInitializer());
        }

        public DbSet<ClientProfile> ClientProfiles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
