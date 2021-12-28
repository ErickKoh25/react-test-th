import React, { memo } from 'react'
import { InfoFlight } from './InfoFlight';
import { ItemCard } from '../../General/Cards/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_ORIGIN_FLIGHT, SELECT_DESTINATION_FLIGHT } from '../../../redux/actions/flight';
import { ADD_NEW_FLIGHTS } from '../../../redux/actions/cart';

export const ContainerData = memo((props) => {
    const dispatch = useDispatch()
    const {flights_from_origin, flights_from_destination} = useSelector(state => state.flight)

    const {date,items,passengers,route,type} = props

    const action = { 
        text: '',
        icon: 'fas fa-shopping-cart'
    }
    const handleClickAction = (id, type) => {
        let flight = null
        if(type=='route1') {
            flight = flights_from_origin.find(f => f.id == id)
            flight.passengers = passengers
            dispatch(SELECT_ORIGIN_FLIGHT(true))
        } else {
            flight = flights_from_destination.find(f => f.id == id)
            flight.passengers = passengers
            dispatch(SELECT_DESTINATION_FLIGHT(true))
        }
        dispatch(ADD_NEW_FLIGHTS(flight))
    }

    return (
        <>
            <InfoFlight title={'Vuelos Disponibles'} route={route}/>
            <div className='exit-search mt-4 mr-4 ml-4'>
                <h4> Salidas para el {date}</h4>
                <div className='container-cards pr-1 pl-1'>
                    {
                        items.map((it,i) => 
                            (
                                <ItemCard key={i} 
                                    id = {it.id}
                                    type = {type}
                                    action = {action}
                                    departureCode = {it.city_dp.code} 
                                    arrivalCode = {it.city_arr.code} 
                                    takeoff = {it.takeoff} 
                                    landing = {it.landing} 
                                    ammount = {it.ammount}
                                    passengers = {passengers}
                                    func = {handleClickAction}
                                />
                            )
                        )
                    }
                </div> 
            </div>
        </>
    )
})
