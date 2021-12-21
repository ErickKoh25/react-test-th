import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CLEAR_DATA_SEARCHBOX_FLIGHT, CLEAR_LOADED_FLIGHTS, SELECT_DESTINATION_FLIGHT, SELECT_ORIGIN_FLIGHT } from '../../../redux/actions/flight';

export const InfoSuccess = ({func}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSearchAgain = () => {
        clearStoreFlights()
        func(false)
    }

    const handleNavigateReservations = () => {
        clearStoreFlights()
        navigate('/my-reservations')
    }
    
    const clearStoreFlights = () => {
        dispatch(CLEAR_LOADED_FLIGHTS())
        dispatch(CLEAR_DATA_SEARCHBOX_FLIGHT({ id_departure: null, id_arrival: null, dates: new Date, round_flight: false, passengers: 1 }))
        dispatch(SELECT_DESTINATION_FLIGHT(false))
        dispatch(SELECT_ORIGIN_FLIGHT(false))
    }

    return (
        <div className='success-add'> 
            <h2>Vuelos Seleccionados Correctamente</h2>
            <i className="fas fa-check-circle mt-4 mb-4"></i>
            <div>
                <button className='btn btn-primary' onClick={handleSearchAgain}>Buscar Nuevamente</button>
                <button className='btn btn-primary' onClick={handleNavigateReservations}>Mis Reservaciones</button>
            </div>
        </div>
    )
}
