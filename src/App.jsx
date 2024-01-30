import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'



function App() {
  const [tableroVisible, setTableroVisible] = useState(false)
  const [botonVisible, setbotonVisible] = useState(true)
  function funcionBoton() {
    setTableroVisible(true)
    setbotonVisible(false)
  }
  return (
    <>
      {botonVisible && (
        <div className='flex items-center justify-center min-h-screen'>
          <button onClick={funcionBoton} className='h-20 font-extrabold text-white duration-700 border-2 rounded-md bg-slate-950 w-96 hover:bg-slate-500'>Empezar Partida</button>
        </div>
      )}
      
      {tableroVisible && (
        <Tablero></Tablero>
      )
      }

    </>
  )
}

export default App
