using DAL.DataContext;
using DAL.Repositories.MongoImpl;
using Domain.Repository;
using Domain.UnitOfWork;
using MongoDBApp.Models;
using System;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private MongoDbContext db;
        private IRepository<Computer> computerRepository;


        public UnitOfWork()
        {
            db = new MongoDbContext();
        }

        public IRepository<Computer> Computers
        {
            get
            {
                if (computerRepository == null)
                    computerRepository = new ComputerRepository(db);
                return computerRepository;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
