using Microsoft.AspNetCore.Mvc;

namespace ToDoApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Dishes", "Laundry", "Vacum", "Wash the car"
    };

        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ToDoItem> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new ToDoItem
            {
                Name = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}