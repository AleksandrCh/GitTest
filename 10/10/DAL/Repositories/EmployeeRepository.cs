using DAL.DataContext;
using Domain.Models;
using Domain.Repository;
using System.Data.Entity;
using System.Linq;

namespace DAL.Repositories
{
    public class EmployeeRepository : IRepository<Employee>
    {
        private ApplicationDbContext db;

        public EmployeeRepository(ApplicationDbContext dbContext)
        {
            db = dbContext;
        }

        public IQueryable<Employee> GetAll()
        {
            return db.Employes;
        }

        public Employee Get(int id)
        {
            return db.Employes.Find(id);
        }

        public void Create(Employee employee)
        {
            db.Employes.Add(employee);
        }

        public void Update(Employee employee)
        {
            db.Entry(employee).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Employee employee = db.Employes.Find(id);
            if (employee != null)
                db.Employes.Remove(employee);
        }
    }
}
