using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Parameter
    {
        public string name { get; set; }
        public double from { get; set; }
        public double to { get; set; }
        public List<Class> classes { get; set; }
        public double value { get; set; }
    }
}
