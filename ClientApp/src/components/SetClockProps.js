import { useState, useEffect, useRef } from 'react'
import ClockProps from './ClockProps'

function SetClockProps(props) {
  const clockProps = new ClockProps()
  const [presets, setPresets] = useState([])
  const [loading, setLoading] = useState(true)
  const [titleFontSize, setTitleFontSize] = useState(clockProps.titleFontSize)
  const [clockFontSize, setClockFontSize] = useState(clockProps.clockFontSize)
  const [titleFontColor, setTitleFontColor] = useState(clockProps.titleFontColor)
  const [clockFontColor, setClockFontColor] = useState(clockProps.clockFontColor)
  const titleRef = useRef(null)
  const fontFamilyRef = useRef(null)
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
    props.titleFontSize = titleFontSize
    props.clockFontSize = clockFontSize
    props.titleFontColor = titleFontColor
    props.clockFontColor = clockFontColor
    props.blinkColons = blinkColonsRef.current.checked
    props.title = titleRef.current.value
    return props
  }

  const setClockProps = () => {
    const setProps = getProps()
    props.setClockProps(setProps)
  }

  const setTitleFontSizeUI = (event) => {
    setTitleFontSize(event.target.value)
    setClockProps()
  }

  const setClockFontSizeUI = (event) => {
    setClockFontSize(event.target.value)
    setClockProps()
  }

  const setTitleFontColorUI = (event) => {
    setTitleFontColor(event.target.value)
    setClockProps()
  }

  const setClockFontColorUI = (event) => {
    setClockFontColor(event.target.value)
    setClockProps()
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      setClockProps()
    }
  }

  const savePreset = () => {
    const preset = getProps()
    fetch('clock/presets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preset),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('There was an error saving the preset.')
        }
        return response.json()
      })
      .then((data) => {
        setPresets(prev => [...prev, data])
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const setPresetToClock = (preset) => {
    props.setClockProps(preset)
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
          <li key={p.id} style={{marginBottom: 10}}>
            Preset {i + 1}:{' '}
            {`Font: ${p.fontFamily}, Title Color: ${p.titleFontColor}, Title Size: ${p.titleFontSize},
             Clock Size: ${p.clockFontSize}, Clock Color: ${p.clockFontColor}, Blink Colons: ${p.blinkColons}`}
             <button onClick={() => setPresetToClock(p)}>Select preset</button>
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
                maxLength={50}
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
                maxLength={50}
              />
              <button onClick={setClockProps}>✓</button>
            </div>
          </div>
          <div>
            <div>Title Font Size</div>
            <div>
              <input type='range' min='1' max='100' value={titleFontSize} onChange={setTitleFontSizeUI} />
              <span>{titleFontSize}</span>
            </div>
          </div>
          <div>
            <div>Clock Font Size</div>
            <div>
              <input type='range' min='1' max='100' value={clockFontSize} onChange={setClockFontSizeUI} />
              <span>{clockFontSize}</span>
            </div>
          </div>
          <div>
            <div>Title Font Color</div>
            <div>
              <input
                id="titleFontColor"
                value={titleFontColor}
                readOnly
                maxLength={50}
                onKeyDown={handleEnter}
              />
              {/* <button onClick={() => setTitleFontColorUI(titleFontColorRef.current.value)}>✓</button> */}
              <input type='color' value={titleFontColor} onChange={setTitleFontColorUI} />
            </div>
          </div>
          <div>
            <div>Clock Font Color</div>
            <div>
              <input
                id="clockFontColor"
                value={clockFontColor}
                readOnly
                maxLength={50}
                onKeyDown={handleEnter}
              />
              {/* <button onClick={setClockProps}>✓</button> */}
              <input type='color' value={clockFontColor} onChange={setClockFontColorUI} />
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
                onClick={savePreset}>
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
