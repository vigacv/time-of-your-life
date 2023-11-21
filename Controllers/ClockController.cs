using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace time.Controllers;

[ApiController]
[Route("[controller]")]
public class ClockController : ControllerBase
{
    private static List<ClockProps> _presets = new List<ClockProps>();

    private readonly ILogger<ClockController> _logger;

    public ClockController(ILogger<ClockController> logger)
    {
        _logger = logger;
        _presets.Add(new());

    }

    [HttpGet, Route("presets")]
    public IEnumerable<ClockProps> GetPresets()
    {
        return _presets.ToArray();
    }

    [HttpPost("presets")]
    public ClockProps AddPreset([FromBody]ClockProps preset)
    {
        _presets.Add(preset);
        return preset;
    }
}
