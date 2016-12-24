using System;
using System.Linq;
using Libraries.FuzzyLogicInference.Classes;
using System.Collections.Generic;

namespace Libraries.FuzzyLogicInference.Expressions
{
    /// <summary>
    /// An abstract class, that represents an expression,
    /// which is a combination of two subexpressions via some binary operation.
    /// </summary>
    public abstract class BinaryOperation : Expression
    {
        /// <summary>
        /// TThe left argument of the operation.
        /// </summary>
        /// <returns> The left argument of the operation. </returns>
        public Expression LeftArgument { get; private set; }
        /// <summary>
        /// TThe right argument of the operation.
        /// </summary>
        /// <returns> The right argument of the operation. </returns>
        public Expression RightArgument { get; private set; }

        /// <summary>
        /// All the input variables' classes, referenced from this expression.
        /// </summary>
        /// <returns> All the input variables' classes, referenced from this expression. </returns>
        public override IEnumerable<Class> ReferencedClasses
        {
            get { return LeftArgument.ReferencedClasses.Union(RightArgument.ReferencedClasses); }
        }

        /// <summary>
        /// Constructs a binary operation expression.
        /// </summary>
        /// <param name="left"> The left argument of the operation. </param>
        /// <param name="right"> The right argument of the operation. </param>
        public BinaryOperation(Expression left, Expression right)
        {
            LeftArgument = left;
            RightArgument = right;
        }
    }
}

