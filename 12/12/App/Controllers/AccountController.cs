using BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace App.Controllers
{
    public class AccountController : Controller
    {
        private IUserService userServise;


        public ActionResult Login()
        {
            

            return View();
        }
    }
}