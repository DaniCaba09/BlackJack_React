import React, { useState } from 'react';

const Modales = ({ showModal, closeModal }) => {
    return (

        <div className={`modal ${showModal ? 'show' : 'hide'}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p className='text-black'>perdiste bro...</p>
            </div>
        </div>

    )
}

export default Modales;