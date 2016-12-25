using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    public class PersonsController : Controller
    {
        private List<Person> People = new List<Person>
        {
            new Person{Name = "Max Musterman", City="Naustadt", Dob=new DateTime(1978, 07, 29)},
            new Person{Name = "Maria Musterfrau", City="London", Dob=new DateTime(1979, 08, 30)},
            new Person{Name = "John Doe", City="Los Angeles", Dob=new DateTime(1980, 09, 01)}
        };

        [Route("api/persons")]
        [HttpGet]
        public IEnumerable<Person> GetPersons()
        {
            return new List<Person>
            {
                new Person{Name = "Max Musterman", City="Naustadt", Dob=new DateTime(1978, 07, 29)},
                new Person{Name = "Maria Musterfrau", City="London", Dob=new DateTime(1979, 08, 30)},
                new Person{Name = "John Doe", City="Los Angeles", Dob=new DateTime(1980, 09, 01)}
            };
        }

        [Route("api/persons/{index}")]
        [HttpGet]
        public ActionResult GetPerson(int index)
        {
            if (index < 0 || index >= People.Count)
                return NotFound();
            
            return Ok(People[index]);
        }

        [Route("api/persons")]
        [AcceptVerbs("POST", "PUT")]
        public ActionResult AddPerson([FromBody] Person person)
        {
            Console.WriteLine($"New Person: {person.Name}");
            return Ok(person);
        }
    }
}