import React from 'react'

export const InfoSuccess = () => {
    return (
        <div> 
            <h2>Vuelos Seleccionados Correctamente</h2>
            <i className="fas fa-check-circle"></i>
            <div>
                <button className='btn btn-primary'>Buscar Nuevamente</button>
                <button className='btn btn-primary'>Ir al Carrito</button>
            </div>
        </div>
    )
}
