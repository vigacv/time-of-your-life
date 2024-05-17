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

    [HttpGet, Route("presets/{id}")]
    public IActionResult GetPreset(Guid id)
    {
        ClockProps? clockProps = _presets.FirstOrDefault(p => p.Id == id);

        if (clockProps == null)
        {
            return NotFound();
        }

        return Ok(clockProps);
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
            TitleFontColor = preset.TitleFontColor,
            ClockFontColor = preset.ClockFontColor
        };
        _presets.Add(clockProps);
        return clockProps;
    }

    [HttpPut("presets/{id}")]
    public IActionResult UpdatePreset(Guid id, [FromBody]SaveClockPropsRequest preset)
    {
        int index = _presets.FindIndex(p => p.Id == id);

        if (index == -1)
        {
            return NotFound();
        }

        ClockProps clockProps = _presets[index];
        
        clockProps.Title = preset.Title;
        clockProps.FontFamily = preset.FontFamily;
        clockProps.TitleFontSize = preset.TitleFontSize;
        clockProps.ClockFontSize = preset.ClockFontSize;
        clockProps.TitleFontColor = preset.TitleFontColor;
        clockProps.ClockFontColor = preset.ClockFontColor;
        clockProps.BlinkColons = preset.BlinkColons;

        return Ok(clockProps);
    }
}
