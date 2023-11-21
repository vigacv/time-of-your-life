class ClockProps {
  fontFamily = 'courier'
  availableFontSizes = [12, 24, 48, 64]
  titleFontSize = 64
  clockFontSize = 48
  blinkColons = true
  fontColor = 'black'

  props = {
    fontFamily: this.fontFamily,
    titleFontSize: this.titleFontSize,
    clockFontSize: this.clockFontSize,
    blinkColons: this.blinkColons,
    availableFontSizes: this.availableFontSizes,
    fontColor: this.fontColor,
  }
}

export default ClockProps
