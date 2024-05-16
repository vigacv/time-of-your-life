import { useState, useEffect, useRef } from 'react'
import ClockProps from './ClockProps'

function SetClockProps(props) {
  const clockProps = new ClockProps()
  const [presets, setPresets] = useState([])
  const [loading, setLoading] = useState(true)
  const titleRef = useRef(null)
  const fontFamilyRef = useRef(null)
  const fontColorRef = useRef(null)
  const titleFontSizeRef = useRef(null)
  const clockFontSizeRef = useRef(null)
  const blinkColonsRef = useRef(null)

  useEffect(() => {
    ; (async () => {
      const response = await fetch('clock/presets')
      const data = await response.json()
      setPresets(data)
      setLoading(false)
    })()
  }, [])

  const getProps = () => {
    const props = new ClockProps()
    props.fontFamily = fontFamilyRef.current.value
    props.titleFontSize = titleFontSizeRef.current.value
    props.clockFontSize = clockFontSizeRef.current.value
    props.fontColor = fontColorRef.current.value
    props.blinkColons = blinkColonsRef.current.checked
    props.title = titleRef.current.value
    return props
  }

  const setClockProps = () => {
    const setProps = getProps()
    props.setClockProps(setProps)
  }

  const fontSizeOptions = (selctedSize) => {
    return clockProps.availableFontSizes.map((size) => {
      var option = <option>{size}</option>
      return option
    })
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      setClockProps()
    }
  }

  const presetsDisplay = (() => {
    console.log(presets)
    return loading ? (
      <div>
        This is a good place to display and use the presets stored on the sever.
      </div>
    ) : (
      <ul>
        {presets.map((p, i) => (
          <li>
            Preset {i + 1}:{' '}
            {`Font: ${p.fontFamily}, Color: ${p.fontColor}, Title Size: ${p.titleFontSize}, Clock Size: ${p.clockFontSize}`}
          </li>
        ))}
      </ul>
    )
  })()

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
        <a
          style={{ cursor: 'pointer' }}
          onClick={() =>
            alert(
              'This the button that would expand or collapse the settings panel.'
            )
          }
        >
          +/-
        </a>
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
            <div>Title</div>
            <div>
              <input
                defaultValue={clockProps.title}
                ref={titleRef}
                onKeyDown={handleEnter}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Font Family</div>
            <div>
              <input
                id="fontFamily"
                defaultValue={clockProps.fontFamily}
                ref={fontFamilyRef}
                onKeyDown={handleEnter}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Title Font Size</div>
            <div>
              <select id="titleFontSize" ref={titleFontSizeRef} defaultValue={clockProps.titleFontSize} onChange={setClockProps}>
                {fontSizeOptions(clockProps.titleFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Clock Font Size</div>
            <div>
              <select id="clockFontSize" ref={clockFontSizeRef} defaultValue={clockProps.clockFontSize} onChange={setClockProps}>
                {fontSizeOptions(clockProps.clockFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Font Color</div>
            <div>
              <input
                id="fontColor"
                defaultValue={clockProps.fontColor}
                ref={fontColorRef}
                onKeyDown={handleEnter}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Blink Colons</div>
            <div>
              <input
                id="blinkColons"
                defaultChecked={clockProps.blinkColons}
                onChange={setClockProps}
                ref={blinkColonsRef}
                type="checkbox"
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
          <div>{presetsDisplay}</div>
        </div>
      </div>
    </div>
  )
}

export default SetClockProps
