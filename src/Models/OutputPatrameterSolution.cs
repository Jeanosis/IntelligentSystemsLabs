using System.Collections.Generic;

namespace WebApplication.Models
{
    public class OutputParameterSolution
    {
        public class Graph
        {
            public List<double> values { get; set; }
            public double step { get; set; }
        }
        public string name { get; set; }
        public Graph graph { get; set; }
        public double gravity_center { get; set; }
    }
}