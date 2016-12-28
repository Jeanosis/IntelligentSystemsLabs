using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Task
    {
        public string name { get; set; }
        public List<Parameter> in_vars { get; set; }
        public List<Parameter> out_vars { get; set; }
        public List<Rule> rules { get; set; }
    }
}
