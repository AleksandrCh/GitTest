using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

        public virtual ICollection<Career> Careers { get; set; }
        public virtual ICollection<Salary> Salaries { get; set; }
        public Employee()
        {
            Careers = new List<Career>();
            Salaries = new List<Salary>();
        }
    }
}
