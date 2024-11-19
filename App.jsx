import { useEffect, useState } from "react"

function App() {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length) {
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomColor(type) {
    if (type === 'hex') {
      const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let hexColor = '#'

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)]
      }

      setTypeOfColor('hex')
      setColor(hexColor)
    } else if (type === 'rgb') {
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setTypeOfColor('rgb')
      setColor(`rgb(${r},${g},${b})`)
    }
  }

  useEffect(() => {
    const types = ['hex', 'rgb']
    handleCreateRandomColor(types[randomColorUtility(types.length)])
  }, [])

  return <div
    style={{
      textAlign: 'center',
      widows: '100vw',
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
      <button onClick={() => handleCreateRandomColor('hex')}>Generate HEX Color</button>
      <button onClick={() => handleCreateRandomColor('rgb')}>Generte RGB Color</button>
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
}

export default App
