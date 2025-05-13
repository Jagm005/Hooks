import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MostrarOcultar from './Hooks/Texto'
import Cronometro from './Hooks/Cronometro'
import BusquedaGitHub from './Hooks/Busqueda-GitHub'
import MensajeMontaje from './Hooks/MensajeMontaje'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div style={{ flex: 1, padding: '1rem', boxSizing: 'border-box' }}>
        <h1>Hooks Básicos</h1>
        <div className="column-box">
          <BusquedaGitHub />
        </div>
        <div className="column-box">
          <MensajeMontaje />
        </div>
        <div className="column-box">
          <MostrarOcultar />
        </div>
        <div className="column-box">
          <Cronometro />
        </div>
      </div>
      <div className="second-column">
        {/* Segunda columna vacía para futuros contenidos */}
      </div>
    </div>
  )
}

export default App
