using DAL.DataContext;
using Domain.Models;
using Domain.Repository;
using System.Data.Entity;
using System.Linq;


namespace DAL.Repositories
{
    public class DepartmentRepository : IRepository<Department>
    {
        private ApplicationDbContext db;

        public DepartmentRepository(ApplicationDbContext dbContext)
        {
            db = dbContext;
        }

        public IQueryable<Department> GetAll()
        {
            return db.Departments;
        }

        public Department Get(int id)
        {
            return db.Departments.Find(id);
        }

        public void Create(Department department)
        {
            db.Departments.Add(department);
        }

        public void Update(Department department)
        {
            db.Entry(department).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Department department = db.Departments.Find(id);
            if (department != null)
                db.Departments.Remove(department);
        }
    }
}
