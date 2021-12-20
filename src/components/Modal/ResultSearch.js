import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { DataSearch } from './DataSearch/DataSearch'
import { EmptySearch } from './Empty/EmptySearch'

export const ResultSearch = ({func}) => {
    const {data_selected_flight:{id_departure, id_arrival,round_flight},flights_from_departure, flights_from_arrival} = useSelector(state => state.flight)
    const citys = useSelector(state => state.city.citys)
    const {name:name_departure} = (id_departure!=null) ? citys.find(c=>c.id==id_departure) : ''
    const {name:name_arrival} = (id_arrival!=null) ? citys.find(c=>c.id==id_arrival) : ''
    const route1 = `${name_departure} - ${name_arrival}`
    const route2 = `${name_arrival} - ${name_departure}`
    const results = []
    const results2 = []
    return (
        <div className='result-search'>
            {
                results 
                    ?   <>
                            <DataSearch items={results} route1={route1} date={''} func={func}/>
                            <DataSearch items={results2} route1={route2} date={''}/>
                        </>
                    :   <EmptySearch />
                
            }
            
            
        </div>
    )
}
