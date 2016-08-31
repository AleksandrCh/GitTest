using Domain.Repository;
using MongoDBApp.Models;
using System;

namespace Domain.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Computer> Computers { get; }
    }
}
