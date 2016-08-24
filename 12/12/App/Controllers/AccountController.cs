using App.Models;
using BLL.DTO;
using BLL.Infrastructure;
using BLL.Interfaces.Services;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace App.Controllers
{
    public class AccountController : Controller
    {
        private IUserService _userServise;

        public AccountController(IUserService userServise)
        {
            _userServise = userServise;
        }

        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                UserDTO userDto = new UserDTO
                {
                    Email = model.Email,
                    Password = model.Password,
                    Role = "user"
                };
                OperationDetails operationDetails = await _userServise.Create(userDto);
                if (operationDetails.Succedeed)
                    return RedirectToAction("Index", "Home");
                else
                    ModelState.AddModelError(operationDetails.Property, operationDetails.Message);
            }
            return View(model);
        }
    }
}