using Domain.Models;
using Domain.Repository;
using System;

namespace Domain.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Department> Departments { get; }
        IRepository<Job> Jobs { get; }
        IRepository<Employee> Employes { get; }
        IRepository<Career> Careers { get; }
        IRepository<Salary> Salaries { get; }

        void Save();

        void Dispose(bool disposing);
    }
}
