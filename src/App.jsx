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
    <>
      
      
      <BusquedaGitHub />
      <MensajeMontaje/>
      
      <MostrarOcultar />
      <Cronometro />
      
    </>
  )
}

export default App
