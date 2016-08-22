using MongoDB.Driver;
using MongoDBApp.Models;

namespace DAL.DataContext
{
    public class MongoDbContext
    {
        MongoClient client;
        IMongoDatabase database;

        public MongoDbContext()
        {
            string connectionString = "mongodb://localhost";

            client = new MongoClient(connectionString);
            database = client.GetDatabase("test");
        }

        public IMongoCollection<Computer> Computers
        {
            get { return database.GetCollection<Computer>("Computers"); }
        }
    }
}
