﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Rule
    {
        public Expression expr { get; set; }
        public string var_name { get; set; }
        public string class_name { get; set; }
    }
}
