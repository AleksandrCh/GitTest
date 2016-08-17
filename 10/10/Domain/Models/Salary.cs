using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    class Salary
    {
        [Key]
        public int SalaryId { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int Wages { get; set; }
    }
}
