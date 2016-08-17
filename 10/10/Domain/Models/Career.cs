using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Career
    {
        [Key]
        public int CareerId { get; set; }
        public DateTime EmploymentDate { get; set; }
        public DateTime? DismissalDate { get; set; }

        public int DepartmentId { get; set; }
        public virtual Department Department { get; set; }

        public int EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
