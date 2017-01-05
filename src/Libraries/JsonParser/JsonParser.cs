using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace Libraries.JsonParser
{
    public static class Parser
    {
        public static WebApplication.Models.Graph GraphClassMF(WebApplication.Models.ClassGraphArguments arguments)
        {
            var classModel = new WebApplication.Models.Class {
                name = "",
                type = arguments.classType,
                @params = arguments.@params
            };
            
            var clazz = ConvertModelToClass(classModel);
            var range = new FuzzyLogicInference.Range(arguments.from, arguments.to);

            return BuildGraph(clazz.CalculateMembershipValueFor, range, arguments.step);
        }

        public static FuzzyLogicInference.Task TaskFromJson(string json)
        {
            var taskModel = JsonConvert.DeserializeObject<WebApplication.Models.Task>(json);
            return TaskFromModel(taskModel);
        }
        
        public static FuzzyLogicInference.Task TaskFromModel(WebApplication.Models.Task taskModel)
        {
            var inVars = taskModel.in_vars.Select(ConvertModelToParameter).ToList();
            var outVars = taskModel.out_vars.Select(ConvertModelToParameter).ToList();
            var rules = taskModel.rules.Select(rule => ConvertModelToRule(rule, inVars, outVars)).ToList();

            return new FuzzyLogicInference.Task(taskModel.name, inVars, outVars, rules);
        }

        public static string TaskToJson(FuzzyLogicInference.Task task) => TaskToJson(task, true);

        public static string TaskToJson(FuzzyLogicInference.Task task, bool indentSubobjects)
        {
            var taskModel = TaskToModel(task);
            return JsonConvert.SerializeObject(taskModel, indentSubobjects ? Formatting.Indented : Formatting.None);
        }

        public static WebApplication.Models.Task TaskToModel(FuzzyLogicInference.Task task)
        {
            return new WebApplication.Models.Task {
                name = task.Name,
                in_vars = task.InputParameters.Select(ConvertParameterToModel).ToList(),
                out_vars = task.OutputParameters.Select(ConvertParameterToModel).ToList(),
                rules = task.Rules.Select(ConvertRuleToModel).ToList()
            };
        }

        public static IDictionary<FuzzyLogicInference.Parameter, double> InputsFromModel(FuzzyLogicInference.Task task, WebApplication.Models.Task taskModel)
        {
            try
            {
                return task.InputParameters
                    .ToDictionary(
                        inVar => inVar,
                        inVar => taskModel.in_vars
                                    .First(inVarModel => inVarModel.name == inVar.Name)
                                    .value
                    );
             }
            catch(InvalidOperationException)  // Might be thrown by IEnumerable.First if task and taskModel are incompatible.
            {
                throw new ArgumentException("The given JSON-string does not give all the necessary varibles' values.");
            }
        }

        public static IList<WebApplication.Models.OutputParameterSolution> SolutionToModel(
            IEnumerable<FuzzyLogicInference.Task.OutputParameterSolution> solution,
            int numberOfGraphPoints)
        {
            return solution
                .Select(s => OneVariableSolutionToModel(s, s.Parameter.Range.Length / numberOfGraphPoints))
                .ToList();
        }

        public static IList<WebApplication.Models.OutputParameterSolution> SolutionToModel(
            IEnumerable<FuzzyLogicInference.Task.OutputParameterSolution> solution,
            double graphingStep)
        {
            return solution
                .Select(s => OneVariableSolutionToModel(s, graphingStep))
                .ToList();
        }

        private static WebApplication.Models.OutputParameterSolution OneVariableSolutionToModel(
            FuzzyLogicInference.Task.OutputParameterSolution solution,
            double graphingStep)
        {
            return new WebApplication.Models.OutputParameterSolution {
                name = solution.Parameter.Name,
                gravity_center = solution.GravityCenter,
                graph = BuildGraph(solution, graphingStep)
            };
        }

        private static WebApplication.Models.Graph BuildGraph(
            FuzzyLogicInference.Task.OutputParameterSolution oneVariableSolution,
            double graphingStep)
        {
            return BuildGraph(oneVariableSolution.ParameterDistribution, oneVariableSolution.Parameter.Range, graphingStep);
        }

        private static WebApplication.Models.Graph BuildGraph(Func<double, double> function, FuzzyLogicInference.Range range, double graphingStep)
        {
            var graphValues = range.EnumerateWithStep(graphingStep).Select(function).ToList();
            return new WebApplication.Models.Graph { values = graphValues, step = graphingStep };
        }

        public static string SolutionToJson(IEnumerable<FuzzyLogicInference.Task.OutputParameterSolution> results, double graphingStep) =>
            SolutionToJson(results, graphingStep, true);

        public static string SolutionToJson(IEnumerable<FuzzyLogicInference.Task.OutputParameterSolution> results, double graphingStep, bool indented)
        {
            var model = SolutionToModel(results, graphingStep);
            return JsonConvert.SerializeObject(model, indented ? Formatting.Indented : Formatting.None);
        }

        private static FuzzyLogicInference.Parameter ConvertModelToParameter(WebApplication.Models.Parameter parameterModel)
        {
            var range = new FuzzyLogicInference.Range(parameterModel.from, parameterModel.to);
            var classes = parameterModel.classes.Select(ConvertModelToClass).ToList();

            return new FuzzyLogicInference.Parameter(parameterModel.name, range, classes);
        }

        private static FuzzyLogicInference.Classes.Class ConvertModelToClass(WebApplication.Models.Class classModel)
        {
            switch (classModel.type)
            {
                case WebApplication.Models.Class.Type.Triangular:
                    return new FuzzyLogicInference.Classes.ClassWithTriangularMF(
                        classModel.name,
                        classModel.@params[MF_TRIANGULAR_A],
                        classModel.@params[MF_TRIANGULAR_B],
                        classModel.@params[MF_TRIANGULAR_C]
                    );

                case WebApplication.Models.Class.Type.Trapezoidal:
                    return new FuzzyLogicInference.Classes.ClassWithTrapezoidalMF(
                        classModel.name,
                        classModel.@params[MF_TRAPEZOIDAL_A],
                        classModel.@params[MF_TRAPEZOIDAL_B],
                        classModel.@params[MF_TRAPEZOIDAL_C],
                        classModel.@params[MF_TRAPEZOIDAL_D]
                    );

                case WebApplication.Models.Class.Type.Gaussian:
                    return new FuzzyLogicInference.Classes.ClassWithGaussianMF(
                        classModel.name,
                        classModel.@params[MF_GAUSSIAN_C],
                        classModel.@params[MF_GAUSSIAN_SIGMA]
                    );
            
                case WebApplication.Models.Class.Type.GeneralisedBell:
                    return new FuzzyLogicInference.Classes.ClassWithGeneralisedBellMF(
                        classModel.name,
                        classModel.@params[MF_GENERALISED_BELL_A],
                        classModel.@params[MF_GENERALISED_BELL_B],
                        classModel.@params[MF_GENERALISED_BELL_C]
                    );
            
                case WebApplication.Models.Class.Type.SigmoidDiff:
                    return new FuzzyLogicInference.Classes.ClassWithSigmoidDifferenceMF(
                        classModel.name,
                        classModel.@params[MF_SIGMOID_DIFF_A1],
                        classModel.@params[MF_SIGMOID_DIFF_A2],
                        classModel.@params[MF_SIGMOID_DIFF_C1],
                        classModel.@params[MF_SIGMOID_DIFF_C2]
                    );
                
                default:
                    throw new ArgumentException($"Attemt to parse an unknown type of class: {classModel.type}");
            }
        }

        private static FuzzyLogicInference.Rule ConvertModelToRule(
            WebApplication.Models.Rule ruleModel, 
            IEnumerable<FuzzyLogicInference.Parameter> inputVariables, 
            IEnumerable<FuzzyLogicInference.Parameter> outputVariables
        )
        {
            var parameter = outputVariables.FirstOrDefault(p => p.Name == ruleModel.var_name);
            if (parameter == null)
            {
                throw new ArgumentException($"A rule references a non-existing output variable {ruleModel.var_name}.");
            }

            var clazz = parameter.Classes.FirstOrDefault(c => c.Name == ruleModel.class_name);
            if (clazz == null)
            {
                throw new ArgumentException($"A rule references a non-existing output variable's class {ruleModel.class_name}.");
            }

            var expression = ConvertModelToExpression(ruleModel.expr, inputVariables);

            return new FuzzyLogicInference.Rule(parameter, clazz, expression);
        }

        private static FuzzyLogicInference.Expressions.Expression ConvertModelToExpression(
            WebApplication.Models.Expression expressionModel,
            IEnumerable<FuzzyLogicInference.Parameter> inputVariables
        )
        {
            switch (expressionModel.type)
            {
                case WebApplication.Models.Expression.Type.And:
                {
                    var left = ConvertModelToExpression(expressionModel.left, inputVariables);
                    var right = ConvertModelToExpression(expressionModel.right, inputVariables);
                    return new FuzzyLogicInference.Expressions.Conjunction(left, right);
                }

                case WebApplication.Models.Expression.Type.Or:
                {
                    var left = ConvertModelToExpression(expressionModel.left, inputVariables);
                    var right = ConvertModelToExpression(expressionModel.right, inputVariables);
                    return new FuzzyLogicInference.Expressions.Disjunction(left, right);
                }
                
                case WebApplication.Models.Expression.Type.Neg:
                {
                    var argument = ConvertModelToExpression(expressionModel.arg, inputVariables);
                    return new FuzzyLogicInference.Expressions.Negation(argument);
                }
                
                case WebApplication.Models.Expression.Type.State:
                {
                    var parameter = inputVariables.FirstOrDefault(p => p.Name == expressionModel.var_name);
                    if (parameter == null)
                    {
                        throw new ArgumentException($"A statement references a non-existing input variable {expressionModel.var_name}.");
                    }

                    var clazz = parameter.Classes.FirstOrDefault(c => c.Name == expressionModel.class_name);
                    if (clazz == null)
                    {
                        throw new ArgumentException($"A statement references a non-existing input variable's class {expressionModel.class_name}.");
                    }

                    return new FuzzyLogicInference.Expressions.MembershipStatement(parameter, clazz);
                }

                default:
                    throw new ArgumentException($"Attempt to handle an unknown type of expression: {expressionModel.type}.");                
            }
        }
        
        private static WebApplication.Models.Parameter ConvertParameterToModel(FuzzyLogicInference.Parameter parameter)
        {
            return new WebApplication.Models.Parameter {
                name = parameter.Name,
                from = parameter.Range.LowerBoundary,
                to = parameter.Range.UpperBoundary,
                classes = parameter.Classes.Select(ConvertClassToModel).ToList()
            };
        }

        private static WebApplication.Models.Class ConvertClassToModel(FuzzyLogicInference.Classes.Class clazz)
        {
            var classModel = new WebApplication.Models.Class { name = clazz.Name, @params = new Dictionary<string, double>() };

            if (clazz is FuzzyLogicInference.Classes.ClassWithTriangularMF)
            {
                classModel.type = WebApplication.Models.Class.Type.Triangular;
                var classWithTriangularMF = clazz as FuzzyLogicInference.Classes.ClassWithTriangularMF;
                classModel.@params[MF_TRIANGULAR_A] = classWithTriangularMF.A;
                classModel.@params[MF_TRIANGULAR_B] = classWithTriangularMF.B;
                classModel.@params[MF_TRIANGULAR_C] = classWithTriangularMF.C;
            }
            else if (clazz is FuzzyLogicInference.Classes.ClassWithTrapezoidalMF)
            {
                classModel.type = WebApplication.Models.Class.Type.Trapezoidal;
                var classWithTrapezoidalMF = clazz as FuzzyLogicInference.Classes.ClassWithTrapezoidalMF;
                classModel.@params[MF_TRAPEZOIDAL_A] = classWithTrapezoidalMF.A;
                classModel.@params[MF_TRAPEZOIDAL_B] = classWithTrapezoidalMF.B;
                classModel.@params[MF_TRAPEZOIDAL_C] = classWithTrapezoidalMF.C;
                classModel.@params[MF_TRAPEZOIDAL_D] = classWithTrapezoidalMF.D;
            }
            else if (clazz is FuzzyLogicInference.Classes.ClassWithGaussianMF)
            {
                classModel.type = WebApplication.Models.Class.Type.Gaussian;
                var classWithGaussianMF = clazz as FuzzyLogicInference.Classes.ClassWithGaussianMF;
                classModel.@params[MF_GAUSSIAN_C] = classWithGaussianMF.C;
                classModel.@params[MF_GAUSSIAN_SIGMA] = classWithGaussianMF.Sigma;
            }
            else if (clazz is FuzzyLogicInference.Classes.ClassWithGeneralisedBellMF)
            {
                classModel.type = WebApplication.Models.Class.Type.GeneralisedBell;
                var classWithGeneralisedBellMF = clazz as FuzzyLogicInference.Classes.ClassWithGeneralisedBellMF;
                classModel.@params[MF_GENERALISED_BELL_A] = classWithGeneralisedBellMF.A;
                classModel.@params[MF_GENERALISED_BELL_B] = classWithGeneralisedBellMF.B;
                classModel.@params[MF_GENERALISED_BELL_C] = classWithGeneralisedBellMF.C;
            }
            else if (clazz is FuzzyLogicInference.Classes.ClassWithSigmoidDifferenceMF)
            {
                classModel.type = WebApplication.Models.Class.Type.SigmoidDiff;
                var classWithSigmoidDifferenceMF = clazz as FuzzyLogicInference.Classes.ClassWithSigmoidDifferenceMF;
                classModel.@params[MF_SIGMOID_DIFF_A1] = classWithSigmoidDifferenceMF.A1;
                classModel.@params[MF_SIGMOID_DIFF_A2] = classWithSigmoidDifferenceMF.A2;
                classModel.@params[MF_SIGMOID_DIFF_C1] = classWithSigmoidDifferenceMF.C1;
                classModel.@params[MF_SIGMOID_DIFF_C2] = classWithSigmoidDifferenceMF.C2;
            }
            else
            {
                throw new ArgumentException($"Attempt to handle an unknown type of class: {clazz.GetType().FullName}.");
            }

            return classModel;
        }

        private static WebApplication.Models.Rule ConvertRuleToModel(FuzzyLogicInference.Rule rule)
        {
            return new WebApplication.Models.Rule {
                var_name = rule.Parameter.Name,
                class_name = rule.Class.Name,
                expr = ConvertExpressionToModel(rule.Expression)
            };
        }

        private static WebApplication.Models.Expression ConvertExpressionToModel(FuzzyLogicInference.Expressions.Expression expression)
        {
            var expressionModel = new WebApplication.Models.Expression();

            if (expression is FuzzyLogicInference.Expressions.Conjunction)
            {
                expressionModel.type = WebApplication.Models.Expression.Type.And;
                var conjunction = expression as FuzzyLogicInference.Expressions.Conjunction;
                expressionModel.left = ConvertExpressionToModel(conjunction.LeftArgument);
                expressionModel.right = ConvertExpressionToModel(conjunction.RightArgument);
            }
            else if (expression is FuzzyLogicInference.Expressions.Disjunction)
            {
                expressionModel.type = WebApplication.Models.Expression.Type.Or;
                var disjunction = expression as FuzzyLogicInference.Expressions.Disjunction;
                expressionModel.left = ConvertExpressionToModel(disjunction.LeftArgument);
                expressionModel.right = ConvertExpressionToModel(disjunction.RightArgument);
            }
            else if (expression is FuzzyLogicInference.Expressions.Negation)
            {
                expressionModel.type = WebApplication.Models.Expression.Type.Neg;
                var negation = expression as FuzzyLogicInference.Expressions.Negation;
                expressionModel.arg = ConvertExpressionToModel(negation.Argument);
            }
            else if (expression is FuzzyLogicInference.Expressions.MembershipStatement)
            {
                expressionModel.type = WebApplication.Models.Expression.Type.State;
                var statement = expression as FuzzyLogicInference.Expressions.MembershipStatement;
                expressionModel.var_name = statement.Parameter.Name;
                expressionModel.class_name = statement.Class.Name;
            }
            else
            {
                throw new ArgumentException($"Attempt to handle an unknown type of expression: {expression.GetType().FullName}.");
            }

            return expressionModel;
        }

#region MembershipFunctionsParameterNames
        private const string MF_TRIANGULAR_A = "a";
        private const string MF_TRIANGULAR_B = "b";
        private const string MF_TRIANGULAR_C = "c";

        private const string MF_TRAPEZOIDAL_A = "a";
        private const string MF_TRAPEZOIDAL_B = "b";
        private const string MF_TRAPEZOIDAL_C = "c";
        private const string MF_TRAPEZOIDAL_D = "d";

        private const string MF_GAUSSIAN_C = "c";
        private const string MF_GAUSSIAN_SIGMA = "sigma";

        private const string MF_GENERALISED_BELL_A = "a";
        private const string MF_GENERALISED_BELL_B = "b";
        private const string MF_GENERALISED_BELL_C = "c";

        private const string MF_SIGMOID_DIFF_A1 = "a1";
        private const string MF_SIGMOID_DIFF_A2 = "a2";
        private const string MF_SIGMOID_DIFF_C1 = "c1";
        private const string MF_SIGMOID_DIFF_C2 = "c2";
#endregion
    }
}
