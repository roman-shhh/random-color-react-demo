import { useState } from "react"

function randomColorUtility(length) {
  return Math.floor(Math.random() * length)
}

function getRandomColorAndType() {
  const types = ['hex', 'rgb']
  const type = types[randomColorUtility(types.length)]
  if (type === 'hex') {
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    return { typeOfColor: 'hex', color: hexColor }
  } else {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    return { typeOfColor: 'rgb', color: `rgb(${r},${g},${b})` }
  }
}

function App() {
  const [{ typeOfColor, color }, setState] = useState(getRandomColorAndType)

  function handleCreateRandomColor(type) {
    if (type === 'hex') {
      const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let hexColor = '#'
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)]
      }
      setState({ typeOfColor: 'hex', color: hexColor })
    } else if (type === 'rgb') {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)
      setState({ typeOfColor: 'rgb', color: `rgb(${r},${g},${b})` })
    }
  }

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '10px',
        gap: '10px'
      }}>
        <button 
          aria-label="Generate HEX color"
          onClick={() => handleCreateRandomColor('hex')}
        >
          Generate HEX Color
        </button>
        <button 
          aria-label="Generate RGB color"
          onClick={() => handleCreateRandomColor('rgb')}
        >
          Generate RGB Color
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '2rem',
          paddingTop: '2.5%',
          paddingBottom: '2.5%',
          gap: '10px'
        }}
      >
        <h3>{typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default App
