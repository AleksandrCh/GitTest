using Domain.Interfaces.Repository;
using System;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task SaveAsync();

        void Dispose(bool disposing);
    }
}
