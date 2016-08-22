using DAL.UnitOfWork;
using Domain.Models;
using Domain.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleUI
{
    class AppController
    {
        public void Run()
        {
            using (var uof = new UnitOfWork())
            {
                Task1(uof);
                //Task2(uof);
                //Task3(uof);
                //Task4(uof);
                //Task5(uof);
                //Task6(uof);
                //Task7(uof);
                //Task8(uof);
                //Task9(uof);
                //Task10(uof);
                //Task11(uof);
                //Task12(uof);
                //Task13(uof);
            }
        }

        private void Task1(IUnitOfWork uof)
        {
            var employeis = uof.Employes.GetAll();

            if (employeis != null)
            {
                foreach (var employee in employeis)
                {
                    Console.WriteLine(employee.EmployeeId.ToString() + " " + employee.FirstName + " " + employee.LastName + " " + employee.DateOfBirth.ToString());
                }
            }
            Console.WriteLine();
        }

        private void Task2(IUnitOfWork uof)
        {
            var jobs = uof.Jobs.GetAll().Where(p => p.MinSalary <= 500);

            if (jobs != null)
            {
                foreach (var job in jobs)
                {
                    Console.WriteLine(job.JobId + " " + job.MinSalary);
                }
            }

            Console.WriteLine();
        }

        private void Task3(IUnitOfWork uof)
        {
            double avgSalary = uof.Salaries.GetAll().Where(p => p.Month == 1 && p.Year == 2015).Average(p => p.Wages);

            Console.WriteLine(avgSalary);
            Console.WriteLine();
        }

        private void Task4(IUnitOfWork uof)
        {
            var worker = uof.Employes.GetAll()
                .OrderBy(p => p.DateOfBirth)
                .FirstOrDefault();

            Console.WriteLine(worker.FirstName + " " + (DateTime.Today.Year - worker.DateOfBirth.Year));
            Console.WriteLine();
        }

        private void WriteWorkersData(IEnumerable<Employee> workers)
        {
            if (workers != null)
            {
                foreach (var worker in workers)
                {
                    Console.WriteLine(worker.FirstName + " " + worker.LastName);
                }
            }
            Console.WriteLine();
        }

        private void Task5(IUnitOfWork uof)
        {
            var workers = from e in uof.Employes.GetAll().ToList()
                          from s in uof.Salaries.GetAll().ToList()
                          where e.EmployeeId == s.EmployeeId && s.Month == 1 && s.Year == 2015
                          select e;

            WriteWorkersData(workers);
        }

        private void Task6(IUnitOfWork uof)
        {
            var workers = from e in uof.Employes.GetAll().ToList()
                          from s in uof.Salaries.GetAll().ToList()
                          where e.EmployeeId == s.EmployeeId && s.Month == 5 && s.Year == 2015 && e.Salaries.Any(p => p.Month < 5 && p.Year == 2015 && p.Wages > s.Wages)
                          select e;

            WriteWorkersData(workers);
        }

        private void Task7(IUnitOfWork uof)
        {
            var workers = from d in uof.Departments.GetAll().ToList()
                          select new
                          {
                              Id = d.DepartmentId,
                              Name = d.Name,
                              Count = uof.Careers.GetAll()
                          .Where(c => d.DepartmentId == c.DepartmentId && c.DismissalDate == null)
                          .Count()
                          };

            if (workers != null)
            {
                foreach (var worker in workers)
                {
                    Console.WriteLine(worker.Id + " " + worker.Name + " " + worker.Count);
                }
            }
            Console.WriteLine();
        }


        private void WriteGroupData(dynamic groups)
        {
            if (groups != null)
            {
                foreach (var group in groups)
                {
                    Console.WriteLine(group.Name + " " + group.AvgSalary);
                }
            }
            Console.WriteLine();
        }

        private void Task8(IUnitOfWork uof)
        {
            var groups = from s in uof.Salaries.GetAll().ToList()
                         join e in uof.Employes.GetAll().ToList()
                         on s.EmployeeId equals e.EmployeeId
                         where s.Year == 2015
                         group s by e.FirstName into g
                         select new { Name = g.Key, AvgSalary = g.Average(p => p.Wages) };

            WriteGroupData(groups);
        }

        private void Task9(IUnitOfWork uof)
        {
            var groups = from s in uof.Salaries.GetAll().ToList()
                         join e in uof.Employes.GetAll().ToList()
                         on s.EmployeeId equals e.EmployeeId
                         where s.Year == 2015
                         group s by e.FirstName into g
                            where g.Count() > 1
                            select new { Name = g.Key, AvgSalary = g.Average(p => p.Wages) };

            WriteGroupData(groups);
        }

        private void Task10(IUnitOfWork uof)
        {
            var workers = from s in uof.Salaries.GetAll().ToList()
                         join e in uof.Employes.GetAll().ToList()
                         on s.EmployeeId equals e.EmployeeId
                         where s.Wages > 1000 && s.Month == 1 && s.Year == 2015
                         select e;

            WriteWorkersData(workers);
        }

        private void Task11(IUnitOfWork uof)
        {
            var workers = from e in uof.Employes.GetAll().ToList()
                          join c in uof.Careers.GetAll().ToList()
                          on e.EmployeeId equals c.EmployeeId
                          where c.DismissalDate == null
                          select new { Name = e.FirstName, Date = c.EmploymentDate};

            if (workers != null)
            {
                foreach (var worker in workers)
                {
                    Console.WriteLine(worker.Name + " " + (worker.Date - DateTime.Today).Days);
                }
            }
            Console.WriteLine();
        }

        private void Task12(IUnitOfWork uof)
        {
            var jobs = uof.Jobs.GetAll().ToList();

            foreach (var job in jobs)
            {
                job.MinSalary *= 1.5;
                uof.Jobs.Update(job);
            }
            uof.Save();
        }
 
        private void Task13(IUnitOfWork uof)
        {
            var data = uof.Salaries.GetAll()
                       .Where(p => p.Year == 2014);

            foreach (var d in data)
            {
                uof.Salaries.Delete(d.SalaryId);
            }
            uof.Save();
        }
    }
}
