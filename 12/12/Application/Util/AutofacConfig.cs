using Autofac;
using Autofac.Integration.Mvc;
using BLL.Intefaces;
using BLL.Security;
using BLL.Servises;
using DAL.ApplicatinContext;
using DAL.Repositories;
using DAL.UnitOfWork;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using System.Web.Mvc;

namespace Application.Util
{
    public static class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            RegisterDbContext(builder);
            RegisterRepositories(builder);
            RegisterUnitOfWork(builder);
            RegisterServices(builder);
            RegisterManagers(builder);

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }

        private static void RegisterDbContext(ContainerBuilder builder)
        {
            builder.RegisterType<ApplicationContext>().As<DbContext>().InstancePerRequest();
        }

        private static void RegisterRepositories(ContainerBuilder builder)
        {
            builder.RegisterGeneric(typeof(GenericRepository<>)).As(typeof(IGenericRepository<>)).InstancePerRequest();
        }

        private static void RegisterUnitOfWork(ContainerBuilder builder)
        {
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerRequest();
        }

        private static void RegisterServices(ContainerBuilder builder)
        {
            builder.RegisterType<UserService>().As<IUserService>().InstancePerRequest();
            builder.RegisterType<ProfileService>().As<IProfileService>().InstancePerRequest();
        }

        private static void RegisterManagers(ContainerBuilder builder)
        {
            builder.RegisterType<UserStore<ApplicationUser>>().As<IUserStore<ApplicationUser>>().InstancePerRequest();
            builder.RegisterType<RoleStore<ApplicationRole>>().AsSelf().InstancePerRequest();

            builder.RegisterType<ApplicationUserManager>().AsSelf().InstancePerRequest();
            builder.RegisterType<ApplicationRoleManager>().AsSelf().InstancePerRequest();
        }
    }
}