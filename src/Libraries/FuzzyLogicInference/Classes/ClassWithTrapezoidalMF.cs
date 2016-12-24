using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Represents a class with the trapezoidal membership function
    // given by the formula
    /// u(x) =
    ///        0,              x < a
    ///        (x-a)/(b-a),    a <= x < b
    ///        1,              b <= x < c
    ///        (d-x)/(d-c),    c <= x < d
    ///        0,              d <= x
    /// or, artelnatively,
    /// u(x) = max(min((x - a) / (b - a), 1, (d - x) / (d - c)), 0).
    /// </summary>
    public class ClassWithTrapezoidalMF : Class
    {
        /// <summary>
        /// The a parameter of the membership function.
        /// Determines where the left slope of trapezoid starts.
        /// </summary>
        /// <returns> The value of the a parameter of the membership function. </returns>
        public double A { get; private set; }
        /// <summary>
        /// The b parameter of the membership function.
        /// Determines where the left slope of the trapezoid ends and the plateau starts.
        /// </summary>
        /// <returns> The value of the b parameter of the membership function. </returns>
        public double B { get; private set; }
        /// <summary>
        /// The c parameter of the membership function.
        /// Determines where the plateau ends and the right slope of the trapezoid starts.
        /// </summary>
        /// <returns> The value of the c parameter of the membership function. </returns>
        public double C { get; private set; }
        /// <summary>
        /// The d parameter of the membership function.
        /// Determines where the right slope of trapezoid ends.
        /// </summary>
        /// <returns> The value of the c parameter of the membership function. </returns>
        public double D { get; private set; }

        /// <summary>
        /// Construct a class, described by trapezoidal distribution function.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        /// <param name="a"> The a parameter of the membership function. </param>
        /// <param name="b"> The b parameter of the membership function. </param>
        /// <param name="c"> The c parameter of the membership function. </param>
        /// <param name="d"> The d parameter of the membership function. </param>
        /// <exception cref="ArgumentException"> Is thrown when (a < b < c < d) is false. </exception>
        public ClassWithTrapezoidalMF(string name, double a, double b, double c, double d) : base(name)
        {
            if (a >= b || b >= c || c >= d)
            {
                throw new ArgumentException("The parameters do not satisfy a < b < c < d.");
            }

            A = a; B = b; C = c; D = d;
        }

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number, using formula
        /// u(x) =
        ///        0,              x < a
        ///        (x-a)/(b-a),    a <= x < b
        ///        1,              b <= x < c
        ///        (d-x)/(d-c),    c <= x < d
        ///        0,              d <= x
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public override double CalculateMembershipValueFor(double value)
        {
            if (value < A)
            {
                return 0.0; ;
            }
            else if (value < B)
            {
                return (value - A) / (B - A);
            }
            else if (value < C)
            {
                return 1.0;
            }
            else if (value < D)
            {
                return (D - value) / (D - C);
            }
            return 0.0;
        }
    }
}

