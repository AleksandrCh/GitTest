using DAL.DataContext;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace DAL.Initializators
{
    class CompanyDbInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            var d1 = new Department() { Name = "D4", Address = "Tolstogo 4"};
            var d2 = new Department() { Name = "D5", Address = "Tolstogo 4" };

            var e1 = new Employee() { FirstName = "Sasha", LastName = "Chechyotko", DateOfBirth = new DateTime(1996, 1, 30)};
            var e2 = new Employee() { FirstName = "Denis", LastName = "Antonenko", DateOfBirth = new DateTime(1990, 10, 23) };
            var e3 = new Employee() { FirstName = "Ira", LastName = "Neira", DateOfBirth = new DateTime(1994, 5, 16) };
            var e4 = new Employee() { FirstName = "Evgeny", LastName = "Razumov", DateOfBirth = new DateTime(1991, 7, 12) };
            var e5 = new Employee() { FirstName = "Leonid", LastName = "Yakubovich", DateOfBirth = new DateTime(1960, 3, 21) };

            var j1 = new Job { Name = "Junior front-end developer", MinSalary = 400 };
            var j2 = new Job { Name = "Junior back-end developer", MinSalary = 350 };
            var j3 = new Job { Name = "Middle front-end developer", MinSalary = 800 };
            var j4 = new Job { Name = "Middle back-end developer", MinSalary = 700 };
            var j5 = new Job { Name = "Senior front-end developer", MinSalary = 1500 };
            var j6 = new Job { Name = "Senior back-end developer", MinSalary = 1700 };

            var c1 = new Career() {Job = j1, Department = d1, Employee = e1, EmploymentDate = new DateTime(2014, 1, 10), DismissalDate = new DateTime(2015, 1, 9) };
            var c2 = new Career() {Job = j5, Department = d2, Employee = e2, EmploymentDate = new DateTime(2014, 1, 10), DismissalDate = new DateTime(2015, 1, 9) };
            var c3 = new Career() {Job = j2, Department = d1, Employee = e3, EmploymentDate = new DateTime(2014, 1, 10), DismissalDate = null };
            var c4 = new Career() {Job = j6, Department = d2, Employee = e4, EmploymentDate = new DateTime(2014, 1, 10), DismissalDate = null };
            var c5 = new Career() {Job = j3, Department = d1, Employee = e5, EmploymentDate = new DateTime(2014, 1, 10), DismissalDate = null };
            var c6 = new Career() {Job = j3, Department = d2, Employee = e1, EmploymentDate = new DateTime(2015, 1, 10), DismissalDate = null };
            var c7 = new Career() {Job =j6, Department = d1, Employee = e2, EmploymentDate = new DateTime(2015, 1, 10), DismissalDate = null };

            var s1 = new Salary { Month = 1, Year = 2015, Wages = 400, Employee = e1 };
            var s2 = new Salary { Month = 2, Year = 2015, Wages = 400, Employee = e2 };
            var s3 = new Salary { Month = 1, Year = 2015, Wages = 400, Employee = e3 };
            var s4 = new Salary { Month = 2, Year = 2015, Wages = 400, Employee = e4 };
            var s5 = new Salary { Month = 1, Year = 2015, Wages = 400, Employee = e5 };
            var s6 = new Salary { Month = 2, Year = 2015, Wages = 600, Employee = e1 };
            var s7 = new Salary { Month = 3, Year = 2015, Wages = 900, Employee = e2 };
            var s8 = new Salary { Month = 4, Year = 2016, Wages = 1400, Employee = e3 };
            var s9 = new Salary { Month = 5, Year = 2016, Wages = 1400, Employee = e4 };
            var s10 = new Salary { Month = 6, Year = 2016, Wages = 1400, Employee = e5 };

            context.Departments.AddRange(new List<Department>() { d1, d2 });
            context.Employes.AddRange(new List<Employee>() { e1, e2, e3, e4, e5 });
            context.Careers.AddRange(new List<Career>() { c1, c2, c3, c4, c5, c6, c7 });
            context.Jobs.AddRange(new List<Job>() { j1, j2, j3, j4, j5, j6 });
            context.Salaries.AddRange(new List<Salary>() { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 });

            context.SaveChanges();
        }
    }
}
