using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace DAL.ApplicatinContext
{
    class ApplicationInitializer : CreateDatabaseIfNotExists<ApplicationContext>
    {
        protected override void Seed(ApplicationContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

            var adminRole = new IdentityRole() { Name = "admin" };
            var userRole = new IdentityRole() { Name = "user" };

            roleManager.Create(adminRole);
            roleManager.Create(userRole);

            base.Seed(context);
        }
    }
}
