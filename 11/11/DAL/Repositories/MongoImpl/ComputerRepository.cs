using DAL.DataContext;
using Domain.Repository;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDBApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.MongoImpl
{ 
    public class ComputerRepository
    {
        private MongoDbContext db;
        public ComputerRepository(MongoDbContext dbContext)
        {
            db = dbContext;

        }

        public async Task<IQueryable<Computer>> GetAll()
        {
            Computer computer = await db.Computers
                .Find(new BsonDocument()).ToListAsync();

            return computer;
        }

        public async Task<Computer> Get(int id)
        {
            Computer computer = await db.Computers
                .Find(new BsonDocument("_id", new ObjectId(id.ToString())))
                .FirstOrDefaultAsync();

            return computer;
        }

        public async void Create(Computer computer)
        {
            await db.Computers.InsertOneAsync(computer);
        }

        public async void Update(Computer computer)
        {
            await db.Computers.ReplaceOneAsync(new BsonDocument("_id", new ObjectId(computer.Id)), computer);
        }

        public async void Delete(int id)
        {
            await db.Computers.DeleteOneAsync(new BsonDocument("_id", new ObjectId(id.ToString())));
        }

    }
}
