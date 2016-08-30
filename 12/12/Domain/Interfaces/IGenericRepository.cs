using System.Linq;

namespace Domain.Interfaces
{
    public interface IGenericRepository<T>
        where T : class
    {
        IQueryable<T> GetAll();
        T Get(string id);
        void Create(T item);
        void Update(T item);
        void Delete(string id);
    }
}
