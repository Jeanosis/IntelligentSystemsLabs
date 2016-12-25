using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Libraries.FuzzyLogicInference;
using Libraries.JsonParser;

namespace WebApplication.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class TaskController : Controller
    {
        private readonly double DEFAULT_GRAPHING_STEP = 0.05;

        [Route("api/task/solve")]
        [AcceptVerbs("POST")]
        public ActionResult Solve([FromBody] Libraries.JsonParser.Models.Task taskModel)
        {
            var task = Parser.TaskFromModel(taskModel);
            var inputs = task.InputParameters
                .ToDictionary(
                    inVar => inVar,
                    inVar => taskModel.in_vars
                                .First(inVarModel => inVarModel.name == inVar.Name)
                                .value
                );

            var solution = task.Solve(inputs);
            var solutionModel = Parser.SolutionToModel(solution, DEFAULT_GRAPHING_STEP);
            
            return Ok(solutionModel);
        }
    }
}