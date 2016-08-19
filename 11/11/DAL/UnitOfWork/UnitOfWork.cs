using DAL.DataContext;
using DAL.Repositories;
using Domain.Models;
using Domain.Repository;
using Domain.UnitOfWork;
using System;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private MongoDbContext db;
        private IRepository<Department> departmentRepository;
        private IRepository<Employee> employeeRepository;
        private IRepository<Job> jobRepository;
        private IRepository<Career> careerRepository;
        private IRepository<Salary> salaryRepository;

        public UnitOfWork()
        {
            db = new MongoDbContext();
        }

        public IRepository<Department> Departments
        {
            get
            {
                if (departmentRepository == null)
                    departmentRepository = new DepartmentRepository(db);
                return departmentRepository;
            }
        }

        public IRepository<Job> Jobs
        {
            get
            {
                if (jobRepository == null)
                    jobRepository = new JobRepository(db);
                return jobRepository;
            }
        }

        public IRepository<Employee> Employes
        {
            get
            {
                if (employeeRepository == null)
                    employeeRepository = new EmployeeRepository(db);
                return employeeRepository;
            }
        }

        public IRepository<Career> Careers
        {
            get
            {
                if (careerRepository == null)
                    careerRepository = new CareerRepository(db);
                return careerRepository;
            }
        }

        public IRepository<Salary> Salaries
        {
            get
            {
                if (salaryRepository == null)
                    salaryRepository = new SalaryRepository(db);
                return salaryRepository;
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
