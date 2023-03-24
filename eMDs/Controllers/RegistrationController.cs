using Microsoft.AspNetCore.Mvc;
using System.Dynamic;

namespace eMDs.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {

        private readonly ILogger<RegistrationController> _logger;

        public RegistrationController(ILogger<RegistrationController> logger)
        {
            _logger = logger;
        }

        [HttpPost("registerUser/")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public IActionResult RegisterUser([FromBody] RegistrationForm newUser)
        {
            return Ok(newUser);
        }
    }
}