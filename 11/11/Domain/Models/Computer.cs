using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace MongoDBApp.Models
{
    public class Computer
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Display(Name = "Название модели")]
        public string Name { get; set; }
        [Display(Name = "Год выпуска")]
        public int Year { get; set; }
    }
}