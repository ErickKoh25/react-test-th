import React from 'react'

export const ItemCard = (props) => {
    const {id,type,departureCode,arrivalCode,takeoff,landing,ammount,func} = props
    console.log(landing)
    return (
        <div className='card pointer mt-3'>
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
            <div className='ammount'>$ {ammount} MXN</div>
            <div className='actions'>
                <button className='btn btn-primary' onClick={() => {func(id,type)}}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    )
}
