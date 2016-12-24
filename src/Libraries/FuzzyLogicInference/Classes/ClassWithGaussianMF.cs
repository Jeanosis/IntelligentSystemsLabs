using System;

namespace Libraries.FuzzyLogicInference.Classes
{
    /// <summary>
    /// Represents a class with the Gaussian membership function,
    /// that is given by formula
    /// u(x) = exp( -1/2 * ((x-c)/sigma)^2 ).
    /// </summary>
    public class ClassWithGaussianMF : Class
    {
        /// <summary>
        /// The expected value of the Gaussian distribution, the graph's center.
        /// </summary>
        /// <returns> A real value, that represents the expected value of the Gaussian distribution. </returns>
        public double C { get; private set; }
        /// <summary>
        /// The standard deviation of the Gaussian distribution.
        /// </summary>
        /// <returns> A real value, that represents the standard deviation of the Gaussian distribution. </returns>
        public double Sigma { get; private set; }

        /// <summary>
        /// Construct a class, described by Gaussian distribution function.
        /// </summary>
        /// <param name="name"> The name of the class. </param>
        /// <param name="c"> The expected value of the distribution. </param>
        /// <param name="sigma"> The standard deviation of the distribution. </param>
        public ClassWithGaussianMF(string name, double c, double sigma) : base(name)
        {
            C = c; Sigma = sigma;
        }

        /// <summary>
        /// Calculates the membership value (the degree of belonging to the class)
        /// for a passed real number, using formula
        /// u(x) = exp( -1/2 * ((x-c)/sigma)^2 ).
        /// </summary>
        /// <param name="value"> The real number, which membership value is to be obtained. </param>
        /// <returns> The membership value of the passed real number. </returns>
        public override double CalculateMembershipValueFor(double value)
        {
            var t = (value - C) / Sigma;
            return Math.Exp(-t * t / 2.0);
        }
    }
}

