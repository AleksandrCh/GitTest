using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System.Configuration;
using MongoDB.Driver.GridFS;
using System.Collections;
using Domain.Models;
using MongoDBApp.Models;

namespace DAL.DataContext
{
    public class MongoDbContext
    {
        MongoClient client;
        IMongoDatabase database;
        MongoGridFS gridFS;

        public MongoDbContext()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
            var con = new MongoUrlBuilder(connectionString);

            client = new MongoClient(connectionString);
            database = client.GetDatabase(con.DatabaseName);
            gridFS = new MongoGridFS(
                new MongoServer(
                    new MongoServerSettings { Server = con.Server }),
                con.DatabaseName,
                new MongoGridFSSettings()
            );
        }

        public IMongoCollection<Computer> Computers
        {
            get { return database.GetCollection<Computer>("Computers"); }
        }

        public MongoGridFS GridFS
        {
            get { return gridFS; }
        }
    }
}
