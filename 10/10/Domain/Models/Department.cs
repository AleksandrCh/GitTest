using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Domain.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }

        public virtual ICollection<Career> Careers { get; set; }
        public Department()
        {
            Careers = new List<Career>();
        }
    }
}
