namespace time.Controllers;

public class ClockProps {
  public Guid Id {get; set;} = Guid.NewGuid();
  public string Title {get; set;} = "The Time of Your Life";
  public string FontFamily {get; set;} = "courier";
  public int TitleFontSize {get; set;} = 64;
  public int ClockFontSize {get ; set;} = 48;
  public string TitleFontColor {get; set;} = "black";
  public string ClockFontColor {get; set;} = "black";
  public bool BlinkColons {get; set;} = true;
}