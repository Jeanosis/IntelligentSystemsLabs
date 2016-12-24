using Libraries.FuzzyLogicInference.Classes;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Libraries.FuzzyLogicInference
{
    /// <summary>
    /// Represents a concrete fuzzy-logic inference problem.
    /// Note that the class's objects are immutable.
    /// </summary>
    public class Task
    {
        /// <summary>
        /// A simple string name of the task.
        /// </summary>
        /// <returns> The name of the task. </returns>
        public string Name { get; private set; }
        /// <summary>
        /// Allows to enumerate through all the input parameters of the task.
        /// </summary>
        /// <returns> Enumerable of the input parameters. </returns>
        public IEnumerable<Parameter> InputParameters { get; private set; }
        /// <summary>
        /// Allows to enumerate through all the output parameters of the task.
        /// </summary>
        /// <returns> Enumerable of the output parameters. </returns>
        public IEnumerable<Parameter> OutputParameters { get; private set; }
        /// <summary>
        /// Allows to enumerate through all the rules of the task.
        /// </summary>
        /// <returns> Enumerable of the output rules. </returns>
        public IEnumerable<Rule> Rules { get; private set; }

        /// <summary>
        /// Constructs a representation of a fuzzy-logic task.
        /// As the resulting object is immutable, you won't be able
        /// to change the assigned fields afterwards.
        /// </summary>
        /// <param name="name"> The name of the task. </param>
        /// <param name="inputs"> A collection of all the task's input parameters. </param>
        /// <param name="outputs"> A collection of all the task's output parameters. </param>
        /// <param name="rules"> A collection of all the task's rules. </param>
        /// <exception cref="ArgumentException"> Is thrown when some of input variables have matching names. </exception>
        /// <exception cref="ArgumentException"> Is thrown when some of output variables have matching names. </exception>
        /// <exception cref="ArgumentException"> Is thrown when there is an output variable, that does not have a rule, associated with it </exception>
        /// <exception cref="ArgumentException"> Is thrown when a rule is associated with a non-present output variable. </exception>
        /// <exception cref="ArgumentException"> Is thrown when a rule reference a non-present input variable. </exception>
        public Task (string name, IEnumerable<Parameter> inputs, IEnumerable<Parameter> outputs, IEnumerable<Rule> rules)
        {
            if (inputs.GroupBy(p => p.Name).Any(g => g.Count() > 1))
            {
                throw new ArgumentException("Names of some input variables are not unique.");
            }
            if (outputs.GroupBy(p => p.Name).Any(g => g.Count() > 1))
            {
                throw new ArgumentException("Names of some output variables are not unique.");
            }

            var outputClasses = outputs.SelectMany(parameter => parameter.Classes);
            var classesWithRules = rules.Select(rule => rule.Class);

            if (outputClasses.Except(classesWithRules).Any())
            {
                throw new ArgumentException("Rules do not fully cover the output variables.");
            }
            if (classesWithRules.Except(outputClasses).Any())
            {
                throw new ArgumentException("Rules reference a non-existing output variable's classes.");
            }

            var inputClasses = inputs.SelectMany(parameter => parameter.Classes);
            var referencedInputClasses = rules.SelectMany(rule => rule.Expression.ReferencedClasses);

            if (referencedInputClasses.Except(inputClasses).Any())
            {
                throw new ArgumentException("Rules reference a non-existing input variable's classes.");
            }

            Name = name;
            InputParameters = inputs;
            OutputParameters = outputs;
            Rules = rules;
        }

        /// <summary>
        /// Solves fuzzy-logic inference problem on the given input variables' values.
        /// The results encode the concrete values of the output variables as well as their fuzzy-distribution.
        /// </summary>
        /// <param name="inputValues"></param>
        /// <returns> The enumerable of OutputParameterSolution objects. Contain both the output variables' fuzzy-distribution and their concrete values. </returns>
        /// <exception cref="ArgumentException"> Is thrown when there is an input variable that is not assigned a value by the inputValues dictionaty. </exception>
        public IEnumerable<OutputParameterSolution> Solve(IDictionary<Parameter, double> inputValues)
        {
            if (InputParameters.Except(inputValues.Keys).Any())
            {
                throw new ArgumentException("Input values do not represent all the task's input parameters.");
            }

            var inputMembershipValues = InputParameters
                .SelectMany(param => param.CalculateMembershipValuesFor(inputValues[param]))  // obtains a sequence of KV-pairs instead of dictionaries
                .ToDictionary(pair => pair.Key, pair => pair.Value);    // merges all the pairs in one dictionaty; throws exception on matching keys (which should never happen)

            var outputMembershipValues = Rules
                .GroupBy(rule => rule.Class)
                .ToDictionary(group => group.Key,
                              group => group.Select(rule => rule.Expression.Evaluate(inputMembershipValues)).Max());  // joins the rules of the same target class via max (fuzzy disjunction)

            return OutputParameters.Select(param => new OutputParameterSolution(param, outputMembershipValues));
        }

        /// <summary>
        /// Represents a solution of fuzzy-logic inference problem for one of the output variables.
        /// Allows for getting the fuzzy-distribution of the variable as well as its concrete value.
        /// Note that the OutputParameterSolution objects are immutable.
        /// </summary>
        public class OutputParameterSolution
        {
            /// <summary>
            /// The output variable, whose value is represented by the object.
            /// </summary>
            /// <returns> The considered output variable. </returns>
            public Parameter Parameter { get; private set; }
            /// <summary>
            /// The fuzzy-disjunction of the output variable's possible values.
            /// </summary>
            /// <returns> The output variable's value distribution function. </returns>
            public Func<double, double> ParameterDistribution { get; private set; }
            /// <summary>
            /// The gravity center of the value distribution function, i.e. the concrete value of the output variable.
            /// </summary>
            /// <returns> The gravity center of the value distribution function. </returns>
            public double GravityCenter { get; private set; }

            /// <summary>
            /// Constructs a representation of the fuzzy-logic inference problem solution for one of the output variables.
            /// </summary>
            /// <param name="parameter"> The output variable, whose solution is considered. </param>
            /// <param name="membershipValues"> The membershipValues of the classes of the output variable. </param>
            /// <exception cref="ArgumentException"> Is thrown when the passed dictionary does not contain all the necessary class membership values. </exception>
            public OutputParameterSolution(Parameter parameter, IDictionary<Class, double> membershipValues)
            {
                if (membershipValues.Keys.Except(parameter.Classes).Any())
                {
                    throw new ArgumentException("The given membership value collection does not contain all the parameter's necessary membership values.");
                }
                
                Parameter = parameter;
                ParameterDistribution = BuildFuzzyDistribution(membershipValues);
                GravityCenter = ComputeGravityCenter(ParameterDistribution, parameter.Range);
            }

            private static Func<double, double> BuildFuzzyDistribution(IDictionary<Class, double> membershipValues) =>
                x => membershipValues
                .Select(pair => Math.Min(pair.Key.CalculateMembershipValueFor(x), pair.Value))
                .Max();

            private static double ComputeGravityCenter(Func<double, double> f, Range range) =>
                Integrate(x => x * f(x), range) / Integrate(f, range);

            // TODO: Integration precision should probably be a class' field,
            // as it might be useful to (in/de)crease it depending on the Parameter.
            // On the other hand, will we actually need it?
            private static readonly double DEFAULT_INTEGRATION_PRECISION = 0.05;

            private static double Integrate(Func<double, double> f, Range range) =>
                Integrate(f, range, DEFAULT_INTEGRATION_PRECISION);

            private static double Integrate(Func<double, double> f, Range range, double precision)
            {
                var res = 0.0;

                for (double x = range.LowerBoundary; x < range.UpperBoundary; x += precision)
                {
                    res += f(x) * precision;
                }

                return res;
            }
        }
    }
}

