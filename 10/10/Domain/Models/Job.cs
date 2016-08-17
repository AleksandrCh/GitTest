using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Job
    {
        [Key]
        public int JobId { get; set; }
        [Required]
        public string Name { get; set; }
        public int MinSalary { get; set; }


    }
}
