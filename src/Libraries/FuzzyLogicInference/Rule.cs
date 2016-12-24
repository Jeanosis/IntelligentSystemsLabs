using System;
using System.Linq;
using Libraries.FuzzyLogicInference.Classes;
using Libraries.FuzzyLogicInference.Expressions;

namespace Libraries.FuzzyLogicInference
{
    /// <summary>
    /// Represents a rule, which is a relation
    /// between a class of an output parameter 
    /// and a fuzzy-logic expression, used to
    /// calculate class's membership value.
    /// </summary>
    public class Rule
    {
        /// <summary>
        /// The output variable, whose class the rule calculates membership value for.
        /// </summary>
        /// <returns> The Parameter object, which is an output variable of some task. </returns>
        public Parameter Parameter { get; private set; }
        /// <summary>
        /// The class, the rule calculates membership value for.
        /// </summary>
        /// <returns> The Class object, which is one of the classes of the referenced output variable. </returns>
        public Class Class { get; private set; }
        /// <summary>
        /// The expression, used to calculate the membership value for Class of Parameter.
        /// </summary>
        /// <returns> The Expression object, which can be the expression tree. </returns>
        public Expression Expression { get; private set; }

        /// <summary>
        /// Constructs a rule, that states that @parameter lies in @clazz
        /// to the degree, which can be calculated via @expression.
        /// </summary>
        /// <param name="parameter"> The referenced output variable. </param>
        /// <param name="clazz"> The referenced output variable's class. </param>
        /// <param name="expression"> The expression, used to calculate membership values. </param>
        /// <exception cref="ArgumentException"> Is thrown if the passed class does not belong to the referenced output variable's class partition. </exception>
        public Rule (Parameter parameter, Class clazz, Expression expression)
        {
            if (!parameter.Classes.Contains(clazz))
            {
                throw new ArgumentException("The given class is not connected with the given parameter.");
            }

            Parameter = parameter; Class = clazz; Expression = expression;
        }
    }
}

