using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using time.Infrastructure;
using time.Models;

namespace time.Controllers;

[ApiController]
[Route("[controller]")]
public class ClockController : ControllerBase
{
    // private static List<ClockProps> _presets = new List<ClockProps>(){ new() };

    private readonly ILogger<ClockController> _logger;
    private readonly ClockDbContext _dbContext;

    public ClockController(ILogger<ClockController> logger, ClockDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    [HttpGet, Route("presets")]
    public async Task<IEnumerable<ClockProps>> GetPresetsAsync()
    {
        return await _dbContext.ClockProps.ToListAsync();
    }

    [HttpGet, Route("presets/{id}")]
    public async Task<IActionResult> GetPreset(Guid id)
    {
        ClockProps? clockProps = await _dbContext.ClockProps.FindAsync(id);

        if (clockProps == null)
        {
            return NotFound();
        }

        return Ok(clockProps);
    }

    [HttpPost("presets")]
    public async Task<ClockProps> AddPreset([FromBody] SaveClockPropsRequest preset)
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
        await _dbContext.ClockProps.AddAsync(clockProps);

        await _dbContext.SaveChangesAsync();

        return clockProps;
    }

    [HttpPut("presets/{id}")]
    public async Task<IActionResult> UpdatePreset(Guid id, [FromBody] SaveClockPropsRequest preset)
    {
        ClockProps? clockProps = await _dbContext.ClockProps.FindAsync(id);

        if (clockProps == null)
        {
            return NotFound();
        }

        clockProps.Title = preset.Title;
        clockProps.FontFamily = preset.FontFamily;
        clockProps.TitleFontSize = preset.TitleFontSize;
        clockProps.ClockFontSize = preset.ClockFontSize;
        clockProps.TitleFontColor = preset.TitleFontColor;
        clockProps.ClockFontColor = preset.ClockFontColor;
        clockProps.BlinkColons = preset.BlinkColons;

        await _dbContext.SaveChangesAsync();

        return Ok(clockProps);
    }
}
