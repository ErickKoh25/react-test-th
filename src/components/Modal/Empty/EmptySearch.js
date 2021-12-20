import React from 'react'

export const EmptySearch = () => {
    return (
        <div className='empty-search'>
            <div className='text-info'>
                <h2>
                    No hay vuelos disponibles en la fecha seleccionada.
                </h2>
                <i className="fas fa-calendar-times mt-4 mb-4"></i>
                <button className='btn btn-primary'> Realizar Nueva Busqueda</button>
            </div>
        </div> 
    )
}
