using System;
using System.Collections.Generic;
using Libraries.FuzzyLogicInference.Classes;

namespace Libraries.FuzzyLogicInference.Expressions
{
    /// <summary>
    /// Represents the condunction of two expressions.
    /// </summary>
    public class Conjunction : BinaryOperation
    {
        /// <summary>
        /// Constructs a conjunction of two expressions.
        /// </summary>
        /// <param name="left"> The left subexpression. </param>
        /// <param name="right"> The rigth subexpression. </param>
        public Conjunction(Expression left, Expression right) : base(left, right) { }

        /// <summary>
        /// Evaluates the expression using the passed dictionary
        /// of the input variables' classes' membrership values as the input.
        /// The conjunction expression returns the minimal value of its subexpressions.
        /// </summary>
        /// <param name="membershipValues"> The dictionary of the input variables' classes' membrership values. </param>
        /// <returns> The result of the expression. </returns>
        public override double Evaluate(IDictionary<Class, double> membershipValues)
        {
            var leftValue = LeftArgument.Evaluate(membershipValues);
            var rightValue = RightArgument.Evaluate(membershipValues);

            return Math.Min(leftValue, rightValue);
        }
    }
}

