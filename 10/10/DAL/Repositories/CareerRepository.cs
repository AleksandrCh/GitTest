using DAL.DataContext;
using Domain.Models;
using Domain.Repository;
using System.Data.Entity;
using System.Linq;

namespace DAL.Repositories
{
    public class CareerRepository : IRepository<Career>
    {
        private ApplicationDbContext db;

        public CareerRepository(ApplicationDbContext dbContext)
        {
            db = dbContext;
        }

        public IQueryable<Career> GetAll()
        {
            return db.Careers;
        }

        public Career Get(int id)
        {
            return db.Careers.Find(id);
        }

        public void Create(Career career)
        {
            db.Careers.Add(career);
        }

        public void Update(Career career)
        {
            db.Entry(career).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Career career = db.Careers.Find(id);
            if (career != null)
                db.Careers.Remove(career);
        }
    }
}
