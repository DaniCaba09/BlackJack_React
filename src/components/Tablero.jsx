import '../App.css'
import crupier from '../assets/crupier.png'
import usuario from '../assets/usuario.jpg'

function Tablero() {

    return (
        <>
       
          <div className='min-h-screen min-w-full flex justify-center items-center'>
            <div id='contenedorPrincipal' className='rounded-md border-2 text-center justify-center items-center flex flex-wrap text-white' >
              <div id='crupier' className=' w-full h-1/3'>
                <img src={crupier} className='ms-4 h-full'></img>
              </div>
              <div id='vs' className='text-2xl font-extrabold '>VS</div>
              <div id='usuario' className=' flex border-b-2 w-full h-1/3 justify-end '>
                <img src={usuario} className='h-full me-4'></img>
              </div>
              <div id='botones' className=''>
                <button className='m-5 rounded-md bg-blue-400 border-2 h-10 w-40  hover:bg-blue-900 duration-300'>Pedir Carta</button>
                <button  className='m-5 rounded-md bg-yellow-300 bg-dark border-2 h-10 w-40 hover:bg-yellow-600 duration-300'>Plantarse</button>
                <button  className=' m-5 rounded-md bg-white border-2 h-10 w-40 text-black hover:bg-slate-300 transition-colors duration-300'>+ Nueva Ronda +</button>
              </div>
            </div>
          </div>
        </>
      )
}

export default Tablero;

