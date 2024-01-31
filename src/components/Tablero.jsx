import { useState } from 'react'
import '../App.css'
import crupier from '../assets/crupier.png'
import usuario from '../assets/usuario.png'
import Cartas from './Cartas'

function Tablero() {

  const [botonNuevaRonda, setbotonNuevaRonda] = useState(false)
  const nuevaRonda = () => {
    setbotonNuevaRonda(true)
  }

  const numeroAleatorio = Math.floor(Math.random() * Cartas.length - 1);
  const numeroAleatorio2 = Math.floor(Math.random() * Cartas.length - 1);

  const numeroAleatorio3 = Math.floor(Math.random() * Cartas.length - 1);
  const numeroAleatorio4 = Math.floor(Math.random() * Cartas.length - 1);

  const [cartasCrupier, setCartasCrupier] = useState([{ img: Cartas[numeroAleatorio].img, valuee: Cartas[numeroAleatorio].valuee }, { img: Cartas[Cartas.length - 1].img, valuee: Cartas[numeroAleatorio2].valuee }]);
  const [cartasUsuario, setCartasUsuario] = useState([{ img: Cartas[numeroAleatorio3].img, valuee: Cartas[numeroAleatorio3].valuee }, { img: Cartas[numeroAleatorio4].img, valuee: Cartas[numeroAleatorio4].valuee }]);

  const pedirCarta = () => {
    const nuevaCarta = Math.floor(Math.random() * Cartas.length);

    const carta = Cartas[nuevaCarta]

    setCartasUsuario([...cartasUsuario, carta])
  }

  const sumarCartas = (sumaCarta) => {
    
  }


  return (
    <>

      <div className='flex items-center justify-center min-w-full min-h-screen '>
        <div id='contenedorPrincipal' className='flex flex-wrap items-center justify-center text-center text-white rounded-md' >
          <div id='crupier' className='flex w-full h-1/3'>
            <img src={crupier} className='h-full '></img>
            <div id='cartasCrupier' className='flex justify-center w-full'>
              {
                cartasCrupier.map((carta, index) => (
                  <img key={index} src={carta.img} width={159.77} className=' shadow shadow-2xl shadow-black m-0.5 border-2 rounded-lg' />
                ))
              }
            </div>
          </div>

          <div id='vs' className='w-full text-2xl font-extrabold border-t-2 border-b-2 '>VS</div>

          <div id='usuario' className='flex w-full h-1/3'>
            <div id='cartasUsuario' className='flex items-center justify-end w-full ms-10'>
              {
                cartasUsuario.map((carta, index) => (
                  <div className='shadow shadow-2xl shadow-black'><img key={index} width={159.77} src={carta.img} className='m-0.5 border-2 rounded-lg shadow shadow-2xl shadow-black' /></div>
                ))
              }
            </div>
            <div className='flex justify-end w-full'>
              <img src={usuario} width={200} height={300} className=' me-10'></img>
            </div>
          </div>

          <div id='botones' className=''>
            <button onClick={pedirCarta} className='w-40 h-10 m-5 duration-300 bg-blue-400 border-2 rounded-md hover:bg-blue-900'>Pedir Carta</button>
            <button onClick={nuevaRonda} className='w-40 h-10 m-5 duration-300 bg-yellow-300 border-2 rounded-md bg-dark hover:bg-yellow-600'>Plantarse</button>
            {botonNuevaRonda && <button className='w-40 h-10 m-5 text-black transition-colors duration-300 bg-white border-2 rounded-md hover:bg-slate-300'>+ Nueva Ronda +</button>}
          </div>
        </div>
      </div>
    </>
  )
}


export default Tablero;

