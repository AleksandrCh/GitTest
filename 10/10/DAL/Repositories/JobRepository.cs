using DAL.DataContext;
using Domain.Models;
using Domain.Repository;
using System.Data.Entity;
using System.Linq;

namespace DAL.Repositories
{
    public class JobRepository : IRepository<Job>
    {
        private ApplicationDbContext db;

        public JobRepository(ApplicationDbContext dbContext)
        {
            db = dbContext;
        }

        public IQueryable<Job> GetAll()
        {
            return db.Jobs;
        }

        public Job Get(int id)
        {
            return db.Jobs.Find(id);
        }

        public void Create(Job job)
        {
            db.Jobs.Add(job);
        }

        public void Update(Job job)
        {
            db.Entry(job).State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            Job job = db.Jobs.Find(id);
            if (job != null)
                db.Jobs.Remove(job);
        }
    }
}
