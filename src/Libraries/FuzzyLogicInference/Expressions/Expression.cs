using System.Collections.Generic;
using Libraries.FuzzyLogicInference.Classes;

namespace Libraries.FuzzyLogicInference.Expressions
{
    /// <summary>
    /// Represents an abstract expression, used in a rule to calculate
    /// the membrership value for an output variable's class.
    /// </summary>
    public abstract class Expression
    {
        /// <summary>
        /// All the input variables' classes, referenced from this expression.
        /// </summary>
        /// <returns> All the input variables' classes, referenced from this expression. </returns>
        public abstract IEnumerable<Class> ReferencedClasses { get; }

        /// <summary>
        /// Evaluates the expression using the passed dictionary
        /// of the input variables' classes' membrership values as the input.
        /// </summary>
        /// <param name="membershipValues"> The dictionary of the input variables' classes' membrership values. </param>
        /// <returns> The result of the expression. </returns>
        public abstract double Evaluate(IDictionary<Class,double> membershipValues);
    }
}

