using BLL.DTO;
using BLL.Identity;
using BLL.Infrastructure;
using BLL.Interfaces.Services;
using DAL.Interfaces;
using Domain.Entities;
using Microsoft.AspNet.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _uow;
        private UserManager _userManager;
        private RoleManager _roleManager;

        public UserService(
            UserManager userManager,
            //RoleManager roleManager,
            IUnitOfWork uow)
        {
            _uow = uow;
            _userManager = userManager;
            //_roleManager = roleManager;
        }

        public async Task<OperationDetails> Create(UserDTO userDTO)
        {
            User user = await _userManager.FindByEmailAsync(userDTO.Email);
            if (user == null)
            {
                user = new User { Email = userDTO.Email, UserName = userDTO.Email };
                var result = await _userManager.CreateAsync(user, userDTO.Password);
                if (result.Errors.Count() > 0)
                {
                    return new OperationDetails(false, result.Errors.FirstOrDefault(), "");
                }
                    await _userManager.AddToRoleAsync(user.Id, userDTO.Role);
                ClientProfile clientProfile = new ClientProfile { Id = user.Id, Address = userDTO.Address, Name = userDTO.Name };
                _uow.Clients.Create(clientProfile);
                await _uow.SaveAsync();
                return new OperationDetails(true, "Регистрация успешно пройдена", "");
            }
            else
            {
                return new OperationDetails(false, "Пользователь с таким логином уже существует", "Email");
            }
        }

        public async Task<ClaimsIdentity> Authenticate(UserDTO userDto)
        {
            ClaimsIdentity claim = null;
            User user = await _userManager.FindAsync(userDto.Email, userDto.Password);
            if (user != null)
                claim = await _userManager.CreateIdentityAsync(user,
                                            DefaultAuthenticationTypes.ApplicationCookie);
            return claim;
        }

        public async Task SetInitialData(UserDTO adminDto, List<string> roles)
        {
            foreach (string roleName in roles)
            {
                var role = await _roleManager.FindByNameAsync(roleName);
                if (role == null)
                {
                    role = new Role { Name = roleName };
                    await _roleManager.CreateAsync(role);
                }
            }
            await Create(adminDto);
        }

        public void Dispose()
        {
            _uow.Dispose();
        }
    }
}