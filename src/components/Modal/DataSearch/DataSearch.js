import React from 'react'
import { ItemCard } from '../../General/ItemCard'
import { InfoFlight } from './InfoFlight'

export const DataSearch = ({date, route, items, func}) => {
    return (
        <div className='data-search'>
            <button onClick={()=>{func(false)}}></button>
            <InfoFlight title={'Vuelos Disponibles'} route={route}/>
            <div className='exit-search mt-5 mr-4 ml-4'>
                <h4> Salidas para el {date}</h4>
                <div className='container-cards pr-1 pl-1'>
                    <ItemCard />
                </div> 
            </div>
        </div>
    )
}
