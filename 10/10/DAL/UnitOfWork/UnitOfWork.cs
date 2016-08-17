using DAL.DataContext;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.UnitOfWork
{
    public class UnitOfWork : IDisposable
    {
        private ApplicationDbContext db;
        private DepartmentRepository departmentRepository;
        private EmployeeRepository employeeRepository;
        private JobRepository jobRepository;
        private CareerRepository careerRepository;
        private SalaryRepository salaryRepository;

        public UnitOfWork()
        {
            db = new ApplicationDbContext();
        }

        public DepartmentRepository Departments
        {
            get
            {
                if (departmentRepository == null)
                    departmentRepository = new DepartmentRepository(db);
                return departmentRepository;
            }
        }

        public JobRepository Jobs
        {
            get
            {
                if (jobRepository == null)
                    jobRepository = new JobRepository(db);
                return jobRepository;
            }
        }

        public EmployeeRepository Employes
        {
            get
            {
                if (employeeRepository == null)
                    employeeRepository = new EmployeeRepository(db);
                return employeeRepository;
            }
        }

        public CareerRepository Careers
        {
            get
            {
                if (careerRepository == null)
                    careerRepository = new CareerRepository(db);
                return careerRepository;
            }
        }

        public SalaryRepository Salaries
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
            db.SaveChanges();
        }

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Task1()
        {
            var employeis = from p in Employes.GetAll() select p;
            
        }
    }
}
