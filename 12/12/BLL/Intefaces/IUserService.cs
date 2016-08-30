using BLL.DTO;
using BLL.Infrastructure;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Intefaces
{
    public interface IUserService
    {
        Task<OperationDetails> Register(UserDTO userDto);
        Task<ClaimsIdentity> Authenticate(UserDTO userDto);
        void SendEmail(string id, string title, string message);
        Task<ApplicationUser> FindByNameAsync(string name);
        Task<bool> IsEmailConfirmedAsync(string id);
        Task<string> GeneratePasswordResetTokenAsync(string id);
        Task<bool> IsLockout(string name);
        Task<OperationDetails> ResetPassword(string id, string code, string password);
    }
}
