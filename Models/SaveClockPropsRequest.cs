namespace time.Models;

public record SaveClockPropsRequest(
    string Title,
    string FontFamily,
    int TitleFontSize,
    int ClockFontSize,
    bool BlinkColons,
    string FontColor
);