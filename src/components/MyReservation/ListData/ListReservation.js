import React, { useEffect, useState } from 'react'
import { ItemCard } from '../../General/Cards/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { convertDivisa } from '../../../helpers/functions';

export const ListReservation = ({reservations}) => {

    const dispatch = useDispatch()
    const {form_data:{name,lastname,address,email}} = useSelector(state => state.reserve)
    const [total,setTotal] = useState(0)
    const confirmed = {
        text:'',
        icon: 'fas fa-check'
    }
    useEffect(() => {
        if(reservations.length > 1) {
            let total = reservations.reduce((a,b) => {return (a.passengers * a.ammount) + ( b.passengers*b.ammount)})
            setTotal(total)
        } else if(reservations.length==1){
            let total = reservations[0].passengers * reservations[0].ammount
            setTotal(total)
        }
        
    }, [reservations])
    return (
        <div className='container-checkout'>
            <div className='list-reservations'>
                <div className='container-title mb-3'>
                    <h2>
                        Lista de Reservaciones confirmadas
                    </h2>
                </div>
                <div className='container-cards pr-3 pl-3'>
                    {   
                        reservations.map((c,i)=> (
                            <ItemCard
                                key={i}
                                id={c.id} 
                                type={''}
                                action={confirmed} 
                                departureCode={c.city_dp.name} 
                                arrivalCode = {c.city_arr.name} 
                                takeoff={c.takeoff} 
                                landing={c.landing} 
                                passengers={c.passengers}
                                ammount={c.ammount} 
                                func={''}
                            />
                        ))
                    }
                </div>
                
            </div>
            <div className='list-data-form-user'>
                <div className='container-title mb-3'>
                    <h2>
                        Información del Cliente
                    </h2>
                </div>
                <div className='container-info'>
                    <div className='data'>
                        <b>Nombre(s):</b> {name}
                    </div>
                    <div className='data'>
                        <b>Apellido(s):</b> {lastname}
                    </div>
                    <div className='data'>
                        <b>Dirección:</b> {address}
                    </div>
                    <div className='data'>
                        <b>Email:</b> {email}
                    </div>
                </div>
                <div className='container-summary'>
                    <div className='show-total'>Total: $ {convertDivisa(total)} MXN</div>
                </div>
            </div>
        </div   >
    )
}
