using DAL.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        UserManager UserManager { get; }
        IClientManager ClientManager { get; }
        RoleManager RoleManager { get; }
        Task SaveAsync();
    }
}
