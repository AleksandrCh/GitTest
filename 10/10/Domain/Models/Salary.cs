using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Salary
    {
        [Key]
        public int SalaryId { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public double Wages { get; set; }

        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
