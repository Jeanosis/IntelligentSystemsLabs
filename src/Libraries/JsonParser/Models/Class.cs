using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Libraries.JsonParser.Models
{
    public class Class
    {
        public string name { get; set; }
        public string type { get; set; }
        public Dictionary<string, double> @params { get; set; }
    }
}
