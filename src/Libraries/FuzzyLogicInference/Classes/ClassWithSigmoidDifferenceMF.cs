using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Represents a class with the sigmoid difference
    /// membership function, given by the formula
    /// u(x) = sig(x; a1, c1) - sig(x; a2, c2),
    /// where
    /// sig(x; a, c) = 1 / (1 + exp( -a(x - c) )).
    /// </summary>
    public class ClassWithSigmoidDifferenceMF : Class
    {
        /// <summary>
        /// First sigmoid a parameter.
        /// </summary>
        /// <returns> The value of the a parameter of the first sigmoid. </returns>
        public double A1 { get; private set; }
        /// <summary>
        /// Second sigmoid a parameter.
        /// </summary>
        /// <returns> The value of the a parameter of the second sigmoid. </returns>
        public double A2 { get; private set; }
        /// <summary>
        /// First sigmoid c parameter.
        /// </summary>
        /// <returns> The value of the c parameter of the first sigmoid. </returns>
        public double C1 { get; private set; }
        /// <summary>
        /// Second sigmoid c parameter.
        /// </summary>
        /// <returns> The value of the c parameter of the second sigmoid. </returns>
        public double C2 { get; private set; }

        /// <summary>
        /// Construct a class, described by sigmoid difference distribution function.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        /// <param name="a1"> First sigmoid a parameter. </param>
        /// <param name="a2"> Second sigmoid a parameter. </param>
        /// <param name="c1"> First sigmoid c parameter. </param>
        /// <param name="c2"> Second sigmoid c parameter. </param>
        /// <exception cref="ArgumentException"> Is thrown when a1 >= a2 or either c1 or c2 is less than zero. </exception>
        public ClassWithSigmoidDifferenceMF(string name, double a1, double a2, double c1, double c2) : base(name)
        {
            if (a1 >= a2 || c1 <= 0.0 || c2 <= 0.0)
            {
                throw new ArgumentException();
            }

            A1 = a1; C1 = c1;
            A2 = a2; C2 = c2;
        }

        private static double Sig(double value, double a, double c) => 1.0 / (1.0 + Math.Exp(-a * (value - c)));

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number, using formula
        /// u(x) = sig(x; a1, c1) - sig(x; a2, c2),
        /// where
        /// sig(x; a, c) = 1 / (1 + exp( -a(x - c) )).
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public override double CalculateMembershipValueFor(double value)
        {
            return Math.Abs(Sig(value, A1, C1) - Sig(value, A2, C2));
        }
    }
}

