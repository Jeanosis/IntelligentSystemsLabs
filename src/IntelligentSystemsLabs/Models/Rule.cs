﻿using IntelligentSystemsLabs.Models.Classes;
using IntelligentSystemsLabs.Models.Expressions;
using System;

namespace IntelligentSystemsLabs.Models
{
    /// <summary>
    /// Represents a rule, which is a relation
    /// between a class of an output parameter 
    /// and a fuzzy-logic expression, used to
    /// calculate class's membership value.
    /// </summary>
	public class Rule
    {
        public Class Class { get; private set; }
        public Expression Expression { get; private set; }

        public Rule (Class clazz, Expression expression)
		{
            Class = clazz; Expression = expression;
		}
	}
}

