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

import { Button } from 'antd';

function App() {
  // Estado para el tema
  const [theme, setTheme] = useState('light')

  // Cambia el tema al alternar el checkbox
  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? 'synthwave' : 'light')
  }

  return (
    <div className="min-h-screen flex flex-col" data-theme={theme}>
      {/* Selector de tema centrado arriba */}
      <div className="w-full flex justify-center my-4">
        <label className="flex cursor-pointer gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
            checked={theme === 'synthwave'}
            onChange={handleThemeChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      {/* Contenido principal en dos columnas DaisyUI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 w-full h-full m-0 p-0">
        <div className="flex flex-col h-full px-4">
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
        <div className="flex flex-col h-full px-4">
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
    </div>
  )
}

export default App
