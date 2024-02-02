import React, { useState } from 'react';

const Modales = ({ showModal, closeModal, nuevaRonda, mensaje }) => {
    return (


        
    

        <div className={`modal ${showModal ? 'show' : 'hide'}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className='flex items-center justify-center my-6 h-60'>
                    <div className='oldmoney'>
                        <h1 className='mb-5 text-5xl'> Comunicado : </h1>
                        <h1 className='text-4xl'> {mensaje} </h1>
                        <button onClick={nuevaRonda} className='w-full mt-24 rounded-md bg-slate-400 oldmoney hover:bg-stone-950'>Empezar de Nuevo</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modales;