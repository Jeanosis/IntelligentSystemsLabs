using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Abstract class, which represents any one of concrete
    /// types of classes - i.e. fuzzy-sets, defined via a membership function.
    /// </summary>
    public abstract class Class
    {
        /// <summary>
        /// The name of the class.
        /// </summary>
        /// <returns> A string, that represents the name of the class. </returns>
        public string Name { get; private set; }

        /// <summary>
        /// Constructs a class with a given name.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        public Class(string name)
        {
            Name = name;
        }

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number.
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public abstract double CalculateMembershipValueFor(double value);
    }
}

