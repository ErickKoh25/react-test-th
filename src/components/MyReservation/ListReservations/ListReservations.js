import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertDivisa } from '../../../helpers/functions'
import { DELETE_ALL_FLIGHTS, DELETE_FLIGHT } from '../../../redux/actions/cart'
import { ActionButton } from '../../General/Button/ActionButton'
import { ItemCard } from '../../General/Cards/ItemCard'

export const ListReservations = () => {
    const dispatch = useDispatch()
    const {cart_flights} = useSelector(state => state.cart)
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
        if(cart_flights.length > 0) {
            let total = cart_flights.reduce((a,b) => {return (a.passengers * a.ammount) + ( b.passengers*b.ammount)})
            setTotal(total)
        }
        
    }, [cart_flights])

    const handleDelete = (id) => {
        dispatch(DELETE_FLIGHT({id}))
    }

    const handleDeleteAll = () => {
        dispatch(DELETE_ALL_FLIGHTS())
    }

    const handleReserve = () => {

    }

    return (
        <div className='container-checkout'>
            <div className='container-title mb-3'>
                <h2>
                    Lista de Reservaciones
                </h2>
                <ActionButton  className={'delete-all'} id={''} type={''} action={action} func={handleDeleteAll}/>
            </div>
            <div className='container-cards pr-3 pl-3'>
                {
                    cart_flights.map((c,i)=> (
                        <ItemCard 
                            key={i}
                            id={c.id} 
                            type={''}
                            action={action} 
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
                <ActionButton  className={'reserve'} id={''} type={''} action={reservar} func={handleReserve}/>  
            </div>
        </div>
    )
}
