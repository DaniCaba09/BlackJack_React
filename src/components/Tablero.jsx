import { useEffect, useState } from 'react'
import '../App.css'
import crupier from '../assets/crupier.png'
import usuario from '../assets/usuario.png'
import Cartas from './Cartas'
import Modales from './Modales'

function Tablero({ }) {

  const [botonNuevaRonda, setbotonNuevaRonda] = useState(false)


  const nuevaRonda = () => {

    setTurnoCrupier(false)

    setCartasCrupier([Cartas[numeroAleatorio()], Cartas[numeroAleatorio()]]);
    setCartasUsuario([Cartas[numeroAleatorio()]]);

    setDeshabilitar(false);
    setbotonNuevaRonda(false)
    setShowModal(false);
  }

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const  [mensaje, setMensaje] = useState("")

  const [turnoCrupier, setTurnoCrupier] = useState(false)
  const numeroAleatorio = () => {
    return Math.floor(Math.random() * Cartas.length - 1)
  };

  const [cartasCrupier, setCartasCrupier] = useState([Cartas[numeroAleatorio()], Cartas[numeroAleatorio()]]);
  const [cartasUsuario, setCartasUsuario] = useState([Cartas[numeroAleatorio()]]);

  const [Deshabilitar, setDeshabilitar] = useState(false);

  const plantarse = () => {
    setDeshabilitar(true)

    setTurnoCrupier(true);

    setbotonNuevaRonda(true)

    if (sumarCartas(cartasCrupier) < 17) {
      pedircartaCrupier()
    } else {
      setCartasCrupier([...cartasCrupier])
    }
  }

  useEffect(() => {

    if (turnoCrupier && sumarCartas(cartasCrupier) < 17) {
      plantarse()
    }

    if (turnoCrupier && sumarCartas(cartasCrupier) > sumarCartas(cartasUsuario) && sumarCartas(cartasCrupier) <= 21) {
      setMensaje("Has perdido")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    }
    else if (sumarCartas(cartasCrupier) < sumarCartas(cartasUsuario) && sumarCartas(cartasUsuario) <= 21) {
      setMensaje("Has ganado")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    }
    else if (sumarCartas(cartasCrupier) == sumarCartas(cartasUsuario)) {
      setMensaje("Empataste")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    }
    else if (sumarCartas(cartasCrupier) > 21) {
      setMensaje("Has ganado, el crupier se paso.")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)

    }


  }, [cartasCrupier])

  useEffect(() => {

    if (sumarCartas(cartasUsuario) > 21) {
      setMensaje("Has perdido, te pasaste de 21")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    }
    else if (sumarCartas(cartasUsuario) == 21) {
      setMensaje("Has ganado, BLACKJACK!")
      setTimeout(() => {
        setShowModal(true)
      }, 1000)
    }

    if (sumarCartas(cartasUsuario) >= 21) {
      setDeshabilitar(true)
    }


  }, [cartasUsuario])

  const pedircartaCrupier = () => {
    setCartasCrupier([...cartasCrupier, Cartas[numeroAleatorio()]])
  }


  const pedirCarta = () => {
    const carta = Cartas[numeroAleatorio()]

    setCartasUsuario([...cartasUsuario, carta])

  }



  const sumarCartas = (Cartas) => {
    const suma = Cartas.reduce((total, sumaCarta) => {

      const valor = parseInt(sumaCarta.valuee, 10);
      return total + valor;

    }, 0);

    return suma;
  };

  const totalCrupier = sumarCartas(cartasCrupier)
  const totalUsuario = sumarCartas(cartasUsuario)


  return (
    <>

      <div className='flex items-center justify-center min-w-full min-h-screen '>
        <div id='contenedorPrincipal' className='flex flex-wrap items-center justify-center text-center text-white rounded-md h-[17.97%]' >
          <div id='crupier' className='flex w-full h-1/3'>
            <img src={crupier} className='h-full '></img>
            <div id='cartasCrupier' className='flex items-center justify-center w-full'>
              {
                cartasCrupier.map((carta, index) =>
                  turnoCrupier ?

                    <img key={index} src={carta.img} width={120.77} className=' shadow-2xl shadow-black m-0.5 border-2 rounded-lg cartas' />



                    :
                    index == 1 ?
                      (
                        <img key={index} src={carta.img} width={120.77} className='brillo shadow-2xl shadow-black m-0.5 border-2 rounded-lg cartas' />
                      )
                      :
                      (
                        <img key={index} src={carta.img} width={120.77} className=' shadow-2xl shadow-black m-0.5 border-2 rounded-lg cartas' />
                      )



                )
              }
            </div>
          </div>
          <h3 className='text-2xl font-bold text-yellow-200 suma'>Total Crupier: {turnoCrupier ? totalCrupier : cartasCrupier[0].valuee}</h3>

          <div id='vs' className='w-full text-2xl font-extrabold border-t-2 border-b-2 '>VS</div>

          <h3 className='text-2xl font-bold text-blue-200 suma '>Total Usuario: {totalUsuario}</h3>
          <div id='usuario' className='flex w-full h-1/3'>
            <div id='cartasUsuario' className='flex items-center justify-center w-full ms-10'>
              {
                cartasUsuario.map((carta, index) => (
                  <div className='shadow-2xl shadow-black'><img key={index} width={120.77} src={carta.img} className='m-0.5 border-2 rounded-lg  shadow-2xl shadow-black cartas' /></div>
                ))
              }
            </div>
            <div className='flex justify-end w-full '>
              <img src={usuario} width={230} height={330} className=' me-10 usuarioredondo'></img>
            </div>
          </div>


          <div id='botones' className='text-lg font-medium'>
            {!Deshabilitar &&
              < button onClick={pedirCarta} className='w-40 h-10 m-5 duration-300 bg-blue-400 border-2 rounded-md hover:bg-blue-900'>Pedir Carta</button>
            }

            <button onClick={plantarse} className='w-40 h-10 m-5 duration-300 bg-yellow-300 border-2 rounded-md bg-dark hover:bg-yellow-600'>Plantarse</button>
            <Modales nuevaRonda={nuevaRonda} showModal={showModal} closeModal={closeModal} mensaje={mensaje}></Modales>
            
          </div>
        </div>
      </div >
    </>
  )
}

export default Tablero;
