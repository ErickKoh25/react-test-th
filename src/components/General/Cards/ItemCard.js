import React from 'react'
import { ActionButton } from '../Button/ActionButton'

export const ItemCard = (props) => {
    const {id,date,type,action,passengers,departureCode,arrivalCode,takeoff,landing,ammount,func} = props
    return (
        <> 
            {
                date && <h3 className='card-item-title'>{date}</h3>
            }
            <div className='card pointer mt-2 mb-2'>
                <div className='departure'>
                    <div className='mb-1'>
                        {departureCode}
                    </div>   
                    <div>
                        <i className="fas fa-plane-departure mr-1 ml-1"></i> 
                        {takeoff} 
                    </div> 
                </div>
                <div className='line-flight'></div>
                <div className='arrival'>
                    <div className='mb-1'>
                        {arrivalCode}
                    </div>
                    <div> 
                        {landing} 
                        <i className="fas fa-plane-arrival mr-1 ml-1"></i>
                    </div>
                </div>
                <div className='ammount'> {passengers} x $ {ammount} MXN</div>
                <div className='actions'>
                    <ActionButton claassName={''} id={id} type={type} action={action} func={func} />
                </div>
            </div>
        </>
    )
}
