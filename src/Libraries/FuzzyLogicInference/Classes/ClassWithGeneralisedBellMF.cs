using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Represents a class with the Generalised Bell
    /// membership function, given by the formula
    /// u(x) = 1 / (1 + abs( (x-c)/a )^2b ).
    /// </summary>
    public class ClassWithGeneralisedBellMF : Class
    {
        /// <summary>
        /// The a parameter of the Generalised Bell membership function formula
        /// u(x) = 1 / (1 + abs( (x-c)/a )^2b ).
        /// </summary>
        /// <returns> The a parameter of the Generalised Bell membership function. </returns>
        public double A { get; private set; }
        /// <summary>
        /// The b parameter of the Generalised Bell membership function formula
        /// u(x) = 1 / (1 + abs( (x-c)/a )^2b ).
        /// </summary>
        /// <returns> The b parameter of the Generalised Bell membership function. </returns>
        public double B { get; private set; }
        /// <summary>
        /// The c parameter of the Generalised Bell membership function formula
        /// u(x) = 1 / (1 + abs( (x-c)/a )^2b ).
        /// </summary>
        /// <returns> The c parameter of the Generalised Bell membership function. </returns>
        public double C { get; private set; }

        /// <summary>
        /// Construct a class, described by Generalised Bell distribution function.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        /// <param name="a"> The a parameter of the Generalised Bell membership function formula </param>
        /// <param name="b"> The b parameter of the Generalised Bell membership function formula </param>
        /// <param name="c"> The c parameter of the Generalised Bell membership function formula </param>
        public ClassWithGeneralisedBellMF(string name, double a, double b, double c) : base(name)
        {
            A = a; B = b; C = c;
        }

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number, using formula
        /// u(x) = 1 / (1 + abs( (x-c)/a )^2b ).
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public override double CalculateMembershipValueFor(double value)
        {
            return 1.0 / (1.0 + Math.Abs(Math.Pow((value - C) / A, 2 * B)));
        }
    }
}

