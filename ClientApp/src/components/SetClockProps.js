import { useState } from 'react'
import ClockProps from './ClockProps'

function SetClockProps(props) {
  const clockProps = new ClockProps()
  const [fontFamily, setFontFamily] = useState(clockProps.fontFamily)
  const [fontColor, setFontColor] = useState(clockProps.fontColor)
  const [blinkColons, setBlinkColons] = useState(clockProps.blinkColons)

  const getProps = () => {
    const props = new ClockProps()
    props.fontFamily = document.getElementById('fontFamily').value
    props.titleFontSize = document.getElementById('titleFontSize').value
    props.clockFontSize = document.getElementById('clockFontSize').value
    props.fontColor = document.getElementById('fontColor').value
    props.blinkColons = document.getElementById('blinkColons').checked
    return props
  }

  const setClockProps = () => {
    const setProps = getProps()
    console.log('setProps', setProps)
    props.setClockProps(setProps)
  }

  const fontSizeOptions = (selctedSize) => {
    return clockProps.availableFontSizes.map((size) => {
      var option = <option>{size}</option>
      if (size === selctedSize) {
        option = <option selected>{size}</option>
      }
      return option
    })
  }

  const setFontFamilyUI = () => {
    setFontFamily(document.getElementById('fontFamily').value)
    clockProps.fontFamily = document.getElementById('fontFamily').value
  }

  const setFontColurUI = (e) => {
    setFontColor(document.getElementById('fontColor').value)
    clockProps.fontColor = document.getElementById('fontColor').value
  }

  const setBlinkColonsUI = () => {
    setBlinkColons(document.getElementById('blinkColons').checked)
    clockProps.blinkColons = document.getElementById('blinkColons').checked
    setClockProps()
  }

  return (
    <div id="ClockProps" style={{ overflow: 'auto' }}>
      <div
        style={{
          float: 'left',
          width: '40px',
          height: '100%',
          border: '1px solid white',
          fontSize: '20pt',
        }}
      >
        <a style={{ cursor: 'pointer' }}>+/-</a>
      </div>
      <div>
        <div>
          <h1>Clock Properties</h1>
          <hr />
        </div>
        <div>
          <div>
            <h2>Settings</h2>
          </div>
          <div>
            <div>Font Family</div>
            <div>
              <input
                id="fontFamily"
                value={fontFamily}
                onChange={setFontFamilyUI}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Title Font Size</div>
            <div>
              <select id="titleFontSize" onChange={setClockProps}>
                {fontSizeOptions(clockProps.titleFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Clock Font Size</div>
            <div>
              <select id="clockFontSize" onChange={setClockProps}>
                {fontSizeOptions(clockProps.clockFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Font Color</div>
            <div>
              <input
                id="fontColor"
                value={fontColor}
                onChange={(e) => setFontColurUI(e)}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Blink Colons</div>
            <div>
              <input
                id="blinkColons"
                checked={blinkColons}
                type="checkbox"
                onChange={setBlinkColonsUI}
              />
            </div>
          </div>
          <div>
            <div>
              <button
                onClick={() =>
                  alert('This should save the preset to the sever.')
                }
              >
                Save Preset
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Presets</h2>
          <div>
            This is a good place to display and use the presets stored on the
            sever.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetClockProps
