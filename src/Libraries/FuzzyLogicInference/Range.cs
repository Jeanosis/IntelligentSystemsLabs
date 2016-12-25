using System;
using System.Collections.Generic;

namespace Libraries.FuzzyLogicInference
{
    /// <summary>
    /// Represents an continuous strip of a real numbers [a; b].
    /// </summary>
    public struct Range
    {
        /// <summary>
        /// The least possible value of the range.
        /// </summary>
        /// <returns> The lower boundary of the range. </returns>
        public double LowerBoundary { get; private set; }
        /// <summary>
        /// The greatest possible value of the range.
        /// </summary>
        /// <returns> The upper boundary of the range. </returns>
        public double UpperBoundary { get; private set; }

        /// <summary>
        /// Determines if the range is empty or not.
        /// An empty range is the one whose lower boundary is greater than its upper boundary.
        /// </summary>
        /// <returns> True if the range is empty and false otherwise. </returns>
        public bool IsEmpty { get { return LowerBoundary > UpperBoundary; } }

        /// <summary>
        /// Constructs the range representation.
        /// </summary>
        /// <param name="from"> The lower boundary of the range. </param>
        /// <param name="to"> The upper boundary of the range. </param>
        public Range (double from, double to)
        {
            LowerBoundary = from; UpperBoundary = to;
        }

        /// <summary>
        /// Determines whether the given value is contained in the range.
        /// </summary>
        /// <param name="x"> The value to be tested. </param>
        /// <returns> True if x is in range and false otherwise. </returns>
        public bool Contains(double x) => LowerBoundary <= x && x <= UpperBoundary;

        /// <summary>
        /// Allows to enumerate throught the range with the given step.
        /// </summary>
        /// <param name="step"> The step of enumeration. </param>
        /// <returns> Returns sequence of numbers x_n = LowerBoundary + n*step, where all x_n <= b. </returns>
        public IEnumerable<double> EnumerateWithStep(double step)
        {
            for (double x = this.LowerBoundary; x <= this.UpperBoundary; x += step)
            {
                yield return x;
            }
        }
    }
}

