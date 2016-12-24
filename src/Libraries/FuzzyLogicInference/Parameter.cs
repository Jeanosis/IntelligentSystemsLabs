using Libraries.FuzzyLogicInference.Classes;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Libraries.FuzzyLogicInference
{
    /// <summary>
    /// Represents a variable (either input or output) in fuzzy-logic inference problem description.
    /// Note that the Parameter objects are immutable.
    /// </summary>
    public class Parameter
    {
        /// <summary>
        /// The name of the parameter.
        /// </summary>
        /// <returns>The name of the parameter.</returns>
        public string Name { get; private set; }
        /// <summary>
        /// The range of the variable.
        /// </summary>
        /// <returns> The Range object. </returns>
        public Range Range { get; private set; }
        /// <summary>
        /// The classes, that divide the variable's range into fuzzy-sets.
        /// </summary>
        /// <returns> An enumerable of classes. </returns>
        public IEnumerable<Class> Classes { get; private set; }

        /// <summary>
        /// Constructs the representation of fuzzy-logic inference problem variable.
        /// </summary>
        /// <param name="name"> The variable's name. </param>
        /// <param name="range"> The variable's range. </param>
        /// <param name="classes"> The collection of classes that divide the variable's range. </param>
        /// <exception cref="ArgumentException"> Is thrown if the range is empty. </exception>
        /// <exception cref="ArgumentException"> Is thrown if there are no classes in the variable's class partition. </exception>
        /// <exception cref="ArgumentException"> Is thrown if there are classes with mathcing name. </exception>
        public Parameter(string name, Range range, IEnumerable<Class> classes)
        {
            if (range.IsEmpty)
            {
                throw new ArgumentException("A parameter cannot be defined on an empty range.");
            }

            if (classes.Count() == 0)
            {
                throw new ArgumentException("A parameter should be divided into at least one class.");
            }

            if (classes.GroupBy(c => c.Name).Any(g => g.Count() > 1))
            {
                throw new ArgumentException("Some of the classes' names are not unique.");
            }
            
            Name = name; Range = range; Classes = classes;
        }

        /// <summary>
        /// Calculates membership values of a given value
        /// to each of classes.
        /// </summary>
        /// <param name="value">
        /// An exact value of the parameter. Note that
        /// the value should be in the parameter's range.
        /// </param>
        /// <returns>
        /// A map of the parameter's classes to their membership values.
        /// </returns>
        /// <exception cref="ArgumentException"> Is thrown if the value is not in the variable's range. </exception>
        public IDictionary<Class, double> CalculateMembershipValuesFor(double value)
        {
            if (!Range.Contains(value))
            {
                throw new ArgumentException("The value is out of the parameter's range.");
            }

            return Classes.ToDictionary(clazz => clazz, clazz => clazz.CalculateMembershipValueFor(value));
        }
    }
}

