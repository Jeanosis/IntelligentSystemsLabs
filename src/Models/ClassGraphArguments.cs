using System.Collections.Generic;

namespace WebApplication.Models
{
    public class ClassGraphArguments
    {
        public Class.Type classType { get; set; }
        public double from { get; set; }
        public double to { get; set; }
        public double step { get; set; }
        public Dictionary<string, double> @params { get; set; }
    }
}