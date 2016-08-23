using DAL.DataContext;
using DAL.Interfaces;
using Domain.Entities;

namespace DAL.Repositories
{
    public class ClientManager : IClientManager
    {
        public ApplicationContext Database { get; private set; }
        public ClientManager(ApplicationContext db)
        {
            Database = db;
        }

        public void Create(ClientProfile item)
        {
            Database.ClientProfiles.Add(item);
            Database.SaveChanges();
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
