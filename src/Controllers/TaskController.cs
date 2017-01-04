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
        private readonly int DEFAULT_NUMBER_OF_GRAPH_POINTS = 300;

        [Route("api/task/solve")]
        [HttpPost]
        public ActionResult Solve([FromBody] WebApplication.Models.Task taskModel)
        {
            var task = Parser.TaskFromModel(taskModel);
            var inputs = Parser.InputsFromModel(task, taskModel);

            var solution = task.Solve(inputs);
            var solutionModel = Parser.SolutionToModel(solution, DEFAULT_NUMBER_OF_GRAPH_POINTS);
            
            return Ok(solutionModel);
        }
    }
}