using Domain.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DataContext
{
    class ApplicationDbContext : DbContext
    {
        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Earners { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Career> Careers { get; set; }
        public DbSet<Salary> Salaries { get; set; }
    }
}