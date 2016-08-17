using DAL.DataContext;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Initializators
{
    class CompanyDbInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            IList<Department> defaultDepartments = new List<Department>();
            IList<Employee> defaultEmployes = new List<Employee>();
            IList<Job> defaultJob = new List<Job>();
            IList<Career> defaultCareer = new List<Career>();
            IList<Salary> defaultSalary = new List<Salary>();

            defaultDepartments.Add(new Department() { Name = "D4", Address = "Tolstogo 4" });


            foreach (Department department in defaultDepartments)
                context.Departments.Add(department);

            base.Seed(context);
        }
    }
}
