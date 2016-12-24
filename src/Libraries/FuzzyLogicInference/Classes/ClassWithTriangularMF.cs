using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Represents a class with the triangular membership function
    // given by formula
    /// u(x) =
    ///        0,            x < a
    ///        (x-a)/(b-a),  a <= x < b
    ///        (c-x)/(c-b),  b <= x < c
    ///        0,            c <= x
    /// or, alternatively,
    /// u(x) = max(min((x - a) / (b - a), (c - x) / (c - b)), 0)
    /// </summary>
    public class ClassWithTriangularMF : Class
    {
        /// <summary>
        /// The a parameter of the membership function.
        /// Determines where the left slope of the triangle starts.
        /// </summary>
        /// <returns> The a parameter of the membership function. </returns>
        public double A { get; private set; }
        /// <summary>
        /// The b parameter of the membership function.
        /// Determines where the peak of the triangle is.
        /// </summary>
        /// <returns> The b parameter of the membership function. </returns>
        public double B { get; private set; }
        /// <summary>
        /// The c parameter of the membership function.
        /// Determines where the right slope of the triangle ends.
        /// </summary>
        /// <returns> The c parameter of the membership function. </returns>
        public double C { get; private set; }

        /// <summary>
        /// Construct a class, described by triangular distribution function.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        /// <param name="a"> The a parameter of the membership function. </param>
        /// <param name="b"> The b parameter of the membership function. </param>
        /// <param name="c"> The c parameter of the membership function. </param>
        /// <exception cref="ArgumentException"> Is thrown when (a < b < c) is false. </exception>
        public ClassWithTriangularMF(string name, double a, double b, double c) : base(name)
        {
            if (a >= b || b >= c)
            {
                throw new ArgumentException("Parameters do not satisfy a < b < c.");
            }

            A = a; B = b; C = c;
        }

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number, using formula
        /// u(x) =
        ///        0,            x < a
        ///        (x-a)/(b-a),  a <= x < b
        ///        (c-x)/(c-b),  b <= x < c
        ///        0,            c <= x
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public override double CalculateMembershipValueFor(double value)
        {
            if (value < A)
            {
                return 0.0;
            }
            else if (value < B)
            {
                return (value - A) / (B - A);
            }
            else if (value < C)
            {
                return (C - value) / (C - B);
            }
            return 0.0;
        }
    }
}

