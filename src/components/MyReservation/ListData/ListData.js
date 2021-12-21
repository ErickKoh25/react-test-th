import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ListCart } from './ListCart';
import { ListReservation } from './ListReservation';

export const ListData = () => {

    const {flights} = useSelector(state => state.cart)
    const {reservations} = useSelector(state => state.reserve)
    console.log(flights.length)
    console.log(reservations)
    return (
        <div className='container-data'>
            {
                flights.length > 0 ?
                    <ListCart flights={flights}/>
                    : ''
            }
            {
                (reservations.length > 0 && flights.length == 0) ?
                    <ListReservation reservations={reservations}/>
                    : ''
            }
            {
                (reservations.length == 0 && flights.length ==  0) ?
                    <div className='container-empty'>
                        <h2>
                            Tu carrito está vacío
                        </h2>
                        <h3>
                            Selecciona tus vuelos y aquí apareceran!
                        </h3>
                    </div> 
                    : ''
            }
        </div>
       
    )
}
