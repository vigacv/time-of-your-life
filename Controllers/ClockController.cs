using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using time.Models;

namespace time.Controllers;

[ApiController]
[Route("[controller]")]
public class ClockController : ControllerBase
{
    private static List<ClockProps> _presets = new List<ClockProps>(){ new() };

    private readonly ILogger<ClockController> _logger;

    public ClockController(ILogger<ClockController> logger)
    {
        _logger = logger;
    }

    [HttpGet, Route("presets")]
    public IEnumerable<ClockProps> GetPresets()
    {
        return _presets.ToArray();
    }

    [HttpPost("presets")]
    public ClockProps AddPreset([FromBody]SaveClockPropsRequest preset)
    {
        ClockProps clockProps = new ClockProps
        {
            FontFamily = preset.FontFamily,
            TitleFontSize = preset.TitleFontSize,
            ClockFontSize = preset.ClockFontSize,
            BlinkColons = preset.BlinkColons,
            FontColor = preset.FontColor
        };
        _presets.Add(clockProps);
        return clockProps;
    }
}
