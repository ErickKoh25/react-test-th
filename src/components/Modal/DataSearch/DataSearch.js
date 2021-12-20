import React, { useState, useEffect } from 'react'
import { ContainerData } from './ContainerData';
import { useSelector, useDispatch } from 'react-redux';
import { convertDate } from '../../../helpers/functions';
import { SELECT_ORIGIN_FLIGHT } from '../../../redux/actions/flight';
import { REMOVE_LAST_FLIGHT } from '../../../redux/actions/cart';
import { InfoSuccess } from './InfoSuccess';

export const DataSearch = ({className, items1, items2 , func}) => {
    
    const dispatch = useDispatch()
    const citys = useSelector(state => state.city.citys)
    const {
            data_searchbox_flight:{id_departure, id_arrival,dates,round_flight},
            selected_origin_flight,
            selected_destination_flight
        } = useSelector(state => state.flight)
    
    const [showRoute1, setShowRoute1] = useState(true)
    const [showRoute2, setShowRoute2] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [route1, setTextRoute1] = useState('')
    const [route2, setTextRoute2] = useState('')

    const date1 = (round_flight) ? convertDate(dates[0],'dddd D [de] MMMM [de] YYYY') : convertDate(dates,'dddd D [de] MMMM [de] YYYY')
    const date2 = (round_flight) ? convertDate(dates[1],'dddd D [de] MMMM [de] YYYY') : ''
    
    useEffect(() => {

        const {name:name_departure} = (id_departure!=null) ? citys.find(c=>c.id==id_departure) : ''
        const {name:name_arrival} = (id_arrival!=null) ? citys.find(c=>c.id==id_arrival) : ''
        if(name_departure && name_arrival){
            setTextRoute1(`${name_departure} - ${name_arrival}`)
            setTextRoute2( `${name_arrival} - ${name_departure}`)
        }
    }, [id_departure, id_arrival])

    useEffect(() => {
        if((selected_origin_flight && selected_destination_flight) || (selected_origin_flight && !round_flight)) {
            setShowRoute1(false)
            setShowRoute2(false)
            setShowMessage(true)
        } else if(selected_origin_flight) {
            setShowRoute1(false)
            setShowRoute2(true)
        } else {
            setShowRoute1(true)
            setShowRoute2(false)
        }
    }, [selected_origin_flight,selected_destination_flight])
    const handleReturn = () => {
        dispatch(SELECT_ORIGIN_FLIGHT(false))
        dispatch(REMOVE_LAST_FLIGHT())
    }
    return (
        <div className={`${className} data-search`}>
            {
                (showRoute2 && round_flight) && <button className='return pointer btn btn-primary' onClick={handleReturn}><i className="fas fa-arrow-left"></i></button>
            }
            <button className='closeModal pointer btn btn-primary' onClick={()=>{func(false)}}><i className="fas fa-times"></i></button>
            {
                showRoute1 && <ContainerData type={'route1'} type={'route1'} route={route1} items={items1} date={date1}/>
            }
            {
                (showRoute2 && round_flight) && <ContainerData type={'route2'} type={'route2'} route={route2} items={items2} date={date2}/>
            }
            {
                showMessage && <InfoSuccess/>
            }
        </div>
    )
}
