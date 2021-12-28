import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertDivisa, convertDate } from '../../../helpers/functions'
import { DELETE_ALL_FLIGHTS, DELETE_FLIGHT } from '../../../redux/actions/cart'
import { ActionButton } from '../../General/Button/ActionButton'
import { ItemCard } from '../../General/Cards/ItemCard'
import { SHOW_HIDE_MODAL_FORM } from '../../../redux/actions/reserve';

export const ListCart = ({flights}) => {
    
    const dispatch = useDispatch()
    const [total,setTotal] = useState(0)

    const action = { 
        text: '',
        icon: 'fas fa-trash-alt'
    }
    const reservar = {
        text: 'Continuar',
        icon:''
    }
    
    useEffect(() => {
        if(flights.length > 1) {
            let total = flights.reduce((a,b) => {return (a.passengers * a.ammount) + ( b.passengers*b.ammount)})
            setTotal(total)
        } else if(flights.length==1){
            let total = flights[0].passengers * flights[0].ammount
            setTotal(total)
        }
        
    }, [flights])

    const handleDelete = (id) => {
        dispatch(DELETE_FLIGHT({id}))
    }

    const handleDeleteAll = () => {
        dispatch(DELETE_ALL_FLIGHTS())
    }

    const handleContinue = () => {
        console.log('continue')
        dispatch(SHOW_HIDE_MODAL_FORM(true))
    }

    return (
        <div className='container-cart'>
            <div className='container-title mb-3'>
                <h2>
                    Vuelos seleccionados
                </h2>
                <ActionButton  className={'delete-all'} id={''} type={''} action={action} func={handleDeleteAll}/>
            </div>
            <div className='container-cards pr-3 pl-3'>
                {   
                    flights.map((c,i)=> (
                        <ItemCard 
                            key={i}
                            id={c.id} 
                            type={''}
                            action={action} 
                            date={convertDate(c.date.seconds,'dddd D [de] MMMM [de] YYYY',true)}
                            departureCode={c.city_dp.name} 
                            arrivalCode = {c.city_arr.name} 
                            takeoff={c.takeoff} 
                            landing={c.landing} 
                            passengers={c.passengers}
                            ammount={c.ammount} 
                            func={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='container-summary'>
                <div className='show-total'>Total: $ {convertDivisa(total)} MXN</div>
                {
                    <ActionButton className={'reserve'} id={''} type={''} action={reservar} func={handleContinue}/>  
                }
            </div>
        </div>
    )
}
