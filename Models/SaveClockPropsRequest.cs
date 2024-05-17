using System.ComponentModel.DataAnnotations;

namespace time.Models;

public record SaveClockPropsRequest(
    [Required, MaxLength(50)]
    string Title,
    [Required, MaxLength(50)]
    string FontFamily,
    [Range(1, 100)]
    int TitleFontSize,
    [Range(1, 100)]
    int ClockFontSize,
    [Required, MaxLength(50)]
    string TitleFontColor,
    [Required, MaxLength(50)]
    string ClockFontColor,
    bool BlinkColons
);