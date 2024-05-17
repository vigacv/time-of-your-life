namespace time.Models;

public record SaveClockPropsRequest(
    string Title,
    string FontFamily,
    int TitleFontSize,
    int ClockFontSize,
    string TitleFontColor,
    string ClockFontColor,
    bool BlinkColons
);