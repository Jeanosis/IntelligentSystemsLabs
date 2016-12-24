using System;
using System.Collections.Generic;
using Libraries.FuzzyLogicInference.Classes;

namespace Libraries.FuzzyLogicInference.Expressions
{
    /// <summary>
    /// Represents the negation expression,
    /// which negates (finds 1-completement) its argument.
    /// </summary>
    public class Negation : Expression
    {
        /// <summary>
        /// The expression to be negated.
        /// </summary>
        /// <returns> The argument expression. </returns>
        public Expression Argument { get; private set; }

        /// <summary>
        /// All the input variables' classes, referenced from this expression.
        /// </summary>
        /// <returns> All the input variables' classes, referenced from this expression. </returns>
        public override IEnumerable<Class> ReferencedClasses
        {
            get { return Argument.ReferencedClasses; }
        }

        /// <summary>
        /// Constructs a negation expression.
        /// </summary>
        /// <param name="argument"> The argument expression.  </param>
        public Negation(Expression argument)
        {
            Argument = argument;
        }

        /// <summary>
        /// Evaluates the expression using the passed dictionary
        /// of the input variables' classes' membrership values as the input.
        /// The negation finds 1-completement of the value of the argument expression.
        /// </summary>
        /// <param name="membershipValues"> The dictionary of the input variables' classes' membrership values. </param>
        /// <returns> The result of the expression. </returns>
        public override double Evaluate(IDictionary<Class, double> membershipValues)
        {
            return 1.0 - Argument.Evaluate(membershipValues);
        }
    }
}

