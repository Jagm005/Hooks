import { useState } from 'react'
import './App.css'
import MostrarOcultar from './Hooks/Texto'
import Cronometro from './Hooks/Cronometro'
import BusquedaGitHub from './Hooks/Busqueda-GitHub'
import MensajeMontaje from './Hooks/MensajeMontaje'

// Importaciones de Hooks Avanzados
import { AutoFocusInput } from './Hooks_Avanzados/AutoFocusInput'
import { Counter } from './Hooks_Avanzados/Counter'
import { FactorialCalculator } from './Hooks_Avanzados/FactorialCalculator'
import { SearchList } from './Hooks_Avanzados/SearchList'
import { ColorProvider } from './Hooks_Avanzados/ColorContext'
import { ColorDisplay } from './Hooks_Avanzados/ColorDisplay'

function App() {
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


      {/* Segunda columna con Hooks Avanzados */}
      <div className="second-column">
        <h1>Hooks Avanzados</h1>
        <div className="column-box">
          <AutoFocusInput />
        </div>
        <div className="column-box">
          <Counter />
        </div>
        <div className="column-box">
          <FactorialCalculator />
        </div>
        <div className="column-box">
          <SearchList />
        </div>
        <div className="column-box">
          <ColorProvider color="cyan">
            <ColorDisplay />
          </ColorProvider>
        </div>
      </div>
    </div>
  )
}

export default App
