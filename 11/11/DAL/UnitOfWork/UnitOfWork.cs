using DAL.DataContext;
using DAL.Repositories.MongoImpl;
using Domain.Models;
using Domain.Repository;
using Domain.UnitOfWork;
using MongoDBApp.Models;
using System;

namespace DAL.UnitOfWork
{
    public class UnitOfWork
    {
        private MongoDbContext db;
        private IRepository<Computer> computerRepository;


        public UnitOfWork()
        {
            db = new MongoDbContext();
        }

        public IRepository<Computer> Departments
        {
            get
            {
                if (computerRepository == null)
                    computerRepository = new ComputerRepository(db);
                return computerRepository;
            }
        }

       

        public void Save()
        {
            //db.SaveChanges();
        }

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            //if (!this.disposed)
            //{
            //    if (disposing)
            //    {
            //        db.Dispose();
            //    }
            //    this.disposed = true;
            //}
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
