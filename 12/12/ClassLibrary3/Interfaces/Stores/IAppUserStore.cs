using Domain.Entities;
using Microsoft.AspNet.Identity;

namespace BLL.Interfaces.Stores
{
    public interface IAppUserStore : IUserStore<User>
    {
    }
}
