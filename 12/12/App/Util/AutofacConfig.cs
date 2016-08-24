using Autofac;
using Autofac.Integration.Mvc;
using BLL.Identity;
using BLL.Interfaces.Services;
using BLL.Services;
using DAL.DataContext;
using DAL.Interfaces;
using DAL.Repositories;
using DAL.UnitOfWork;
using Domain.Interfaces.Repository;
using System.Data.Entity;
using System.Web.Mvc;
using BLL.Interfaces.Stores;
using BLL.Identity.Stores;

namespace App.Util
{
    public static class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterType<ApplicationContext>().As<DbContext>().InstancePerRequest();
            builder.RegisterGeneric(typeof(GenericRepository<>)).As(typeof(IGenericRepository<>)).InstancePerRequest();
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().InstancePerRequest();
            builder.RegisterType<UserService>().As<IUserService>().InstancePerRequest();

            RegisterStores(builder);
            RegisterManagers(builder);

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }

        private static void RegisterStores(ContainerBuilder builder)
        {
            builder.RegisterType<AppUserStore>().As<IAppUserStore>().InstancePerRequest();
            builder.RegisterType<AppRoleStore>().As<IAppRoleStore>().InstancePerRequest();
        }

        private static void RegisterManagers(ContainerBuilder builder)
        {
            builder.RegisterType<UserManager>().AsSelf().InstancePerRequest();
            builder.RegisterType<RoleManager>().AsSelf().InstancePerRequest();
        }
    }
}