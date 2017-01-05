using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Class
    {
        public enum Type
        {
            Triangular = 0,
            Trapezoidal,
            Gaussian,
            GeneralisedBell,
            SigmoidDiff
        }

        public string name { get; set; }
        public Class.Type type { get; set; }
        public Dictionary<string, double> @params { get; set; }
    }
}
