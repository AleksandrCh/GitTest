using DAL.UnitOfWork;
using System.Linq;

namespace ConsoleUI
{
    class AppController
    {
        public void Run()
        {
            using (var uof = new UnitOfWork())
            {
                var departments = from p in uof.Departments.GetAll() select p;

            }
        }
    }
}
