using System;
using System.Collections.Generic;
using System.Linq;
using Libraries.FuzzyLogicInference.Classes;

namespace Libraries.FuzzyLogicInference.Expressions
{
    /// <summary>
    /// Represents the expression that states,
    /// that the referenced variable's concrete value lies within its referenced class.
    /// </summary>
    public class MembershipStatement : Expression
    {
        /// <summary>
        /// The class, the expression asserts the variable is into. 
        /// </summary>
        /// <returns> The referenced class. </returns>
        public Class Class { get; private set; }
        /// <summary>
        /// The variable, the expressions makes the statement about.
        /// </summary>
        /// <returns> The referenced variable. </returns>
        public Parameter Parameter { get; private set; }

        /// <summary>
        /// All the input variables' classes, referenced from this expression.
        /// </summary>
        /// <returns> All the input variables' classes, referenced from this expression. </returns>
        public override IEnumerable<Class> ReferencedClasses
        {
            get { return new Class[] { Class }; }
        }

        /// <summary>
        /// Constructs a membership statement expression.
        /// </summary>
        /// <param name="parameter"> The referenced variable. </param>
        /// <param name="clazz"> The referenced variable's class. </param>
        /// <exception cref="ArgumentException"> Is thrown if the referenced class is not in the referenced variable's partition. </exception>
        public MembershipStatement(Parameter parameter, Class clazz)
        {
            if (!parameter.Classes.Contains(clazz))
            {
                throw new ArgumentException("The given class is not connected with the given parameter.");
            }

            Parameter = parameter; Class = clazz;
        }

        /// <summary>
        /// Evaluates the expression using the passed dictionary
        /// of the input variables' classes' membrership values as the input.
        /// The membership statement expression returns the membership value for the referenced class.
        /// </summary>
        /// <param name="membershipValues"> The dictionary of the input variables' classes' membrership values. </param>
        /// <returns> The result of the expression. </returns>
        /// <exception cref="ArgumentException"> Is thrown if the referenced class is not one of the keys of the membershipValues dictionary. </exception>
        public override double Evaluate(IDictionary<Class, double> membershipValues)
        {
            if (!membershipValues.ContainsKey(Class))
            {
                throw new ArgumentException($"{nameof(membershipValues)} dictionary does not contain class {Class.Name}");
            }

            return membershipValues[Class];
        }
    }
}

