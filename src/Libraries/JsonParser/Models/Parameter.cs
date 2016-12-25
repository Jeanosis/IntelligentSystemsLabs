﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsonParser.Models
{
    public class Parameter
    {
        public string name { get; set; }
        public double from { get; set; }
        public double to { get; set; }
        public List<Class> classes { get; set; }
    }
}
