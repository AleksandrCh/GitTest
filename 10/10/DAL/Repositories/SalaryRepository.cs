using DAL.DataContext;
using Domain.Models;
using Domain.Repository;
using System.Data.Entity;
using System.Linq;

namespace DAL.Repositories
{
    public class SalaryRepository : IRepository<Salary>
    {
        private ApplicationDbContext db;

        public SalaryRepository(ApplicationDbContext dbContext)
        {
            db = dbContext;
        }

        public IQueryable<Salary> GetAll()
        {
            return db.Salaries;
        }

        public Salary Get(int id)
        {
            return db.Salaries.Find(id);
        }

        public void Create(Salary salary)
        {
            db.Salaries.Add(salary);
        }

        public void Update(Salary salary)
        {
            db.Entry(salary).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Salary salary = db.Salaries.Find(id);
            if (salary != null)
                db.Salaries.Remove(salary);
        }
    }
}
