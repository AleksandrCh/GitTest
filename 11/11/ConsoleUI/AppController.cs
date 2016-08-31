using DAL.UnitOfWork;
using Domain.UnitOfWork;
using MongoDBApp.Models;
using System;


namespace ConsoleUI
{
    class AppController
    {
        public void Run()
        {
            using (var uof = new UnitOfWork())
            {
                FindAllData(uof);
                FindData(uof);
            }
        }

        private void FindAllData(IUnitOfWork uof)
        {
            var all = uof.Computers.GetAll();
            foreach (var computer in all)
            {
                Console.WriteLine(computer.Id + " " + computer.Name + " " + computer.Year);
            }
        }

        private void AddData(IUnitOfWork uof)
        {
            Computer computer1 = new Computer
            {
                Name = "Qualcom",
                Year = 2015
            };
            uof.Computers.Create(computer1);
        }

        private void FindData(IUnitOfWork uof)
        {
            try
            {
                var computer = uof.Computers.Get(0);
                Console.WriteLine(computer.Id + " " + computer.Name + " " + computer.Year);
            }
            catch (IndexOutOfRangeException ex)
            {
                Console.WriteLine("IndexOutOfRangeException");
            }
        }
    }
}
