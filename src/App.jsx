import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero.jsx'



function App() {
  const [tableroVisible, setTableroVisible] = useState(false)
  const [botonVisible, setbotonVisible] = useState(true)

  function funcionBoton() {
    setTableroVisible(true)
    setbotonVisible(false)
  }

  const [animacionActiva, setAnimacionActiva] = useState(false);

  const handleClick = () => {
    // Activa la animación al hacer clic
    setAnimacionActiva(true);

    // Desactiva la animación después de un tiempo para permitir futuros clics
    setTimeout(() => {
      setAnimacionActiva(false);
    }, 1000);  // Ajusta el tiempo de acuerdo a tu animación CSS
  }

  return (
    <>
      {botonVisible && (
        <div className='flex items-center justify-center min-w-full min-h-screen '>
          <div id='contenedorPrincipal' className='flex justify-center text-center text-white border-2 rounded-md' >
            <div className='flex items-center justify-center'>
              {handleClick && ( 
                <button onClick={funcionBoton} className='h-20 font-extrabold text-white duration-700 rounded-md botonjeje w-96 hover:bg-yellow-100'></button>
              )}
            </div>
          </div>
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
