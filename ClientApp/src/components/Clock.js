import { useState, useEffect } from 'react'

function Clock(props) {
  const [date, setDate] = useState(new Date())


  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  let displayText = date.toLocaleTimeString()
  if (props.clockProps.blinkColons & (date.getSeconds() % 2 === 0)) {
    displayText = displayText.replace(/:/g, ' ')
  }

  let displayStyle = {
    fontFamily: props.clockProps.fontFamily,
    color: props.clockProps.fontColor,
  }

  let titleStyle = {
    fontSize: `${props.clockProps.titleFontSize}pt`,
  }

  let clockStyle = {
    fontSize: `${props.clockProps.clockFontSize}pt`,
  }

  return (
    <div id="Clock">
      <div id="Digits" style={displayStyle}>
        <div id="title" style={titleStyle}>
          {props.clockProps.title}
        </div>
        <div id="time" style={clockStyle}>
          {displayText}
        </div>
      </div>
    </div>
  );
}

export default Clock
