using DAL.DataContext;
using Domain.Repository;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDBApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repositories.MongoImpl
{
    public class ComputerRepository : IRepository<Computer>
    {
        private MongoDbContext db;

        public ComputerRepository(MongoDbContext dbContext)
        {
            db = dbContext;
        }

        public IEnumerable<Computer> GetAll()
        {
            var computers = db.Computers.Find(new BsonDocument()).ToEnumerable();
            return computers;
        }

        public Computer Get(int id)
        {
            Computer computer = db.Computers
                .Find(new BsonDocument("Id", new ObjectId(id.ToString())))
                .FirstOrDefault();

            return computer;
        }

        public void Create(Computer computer)
        {
            db.Computers.InsertOne(computer);
        }

        public void Update(Computer computer)
        {
            db.Computers.ReplaceOne(new BsonDocument("Id", new ObjectId(computer.Id)), computer);
        }

        public void Delete(int id)
        {
            db.Computers.DeleteOne(new BsonDocument("Id", new ObjectId(id.ToString())));
        }

    }
}
