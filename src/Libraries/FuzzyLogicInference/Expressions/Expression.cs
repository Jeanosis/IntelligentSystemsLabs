using System.Collections.Generic;
using Libraries.FuzzyLogicInference.Classes;

namespace Libraries.FuzzyLogicInference.Expressions
{
	public abstract class Expression
    {
        public abstract IEnumerable<Class> ReferencedClasses { get; }
        public abstract double Evaluate(IDictionary<Class,double> membershipValues);
	}
}

