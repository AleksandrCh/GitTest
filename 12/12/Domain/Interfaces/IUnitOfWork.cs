using System;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        Task SaveAsync();
        void Dispose(bool disposing);
    }
}
