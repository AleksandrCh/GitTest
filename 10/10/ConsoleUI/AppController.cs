using DAL.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleUI
{
    class AppController
    {
        private UnitOfWork unitOfWork;

        public AppController()
        {
            unitOfWork = new UnitOfWork();
        }


    }
}
