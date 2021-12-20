import React from 'react'

export const ItemCard = () => {
    return (
        <div className='card pointer mb-3'>
            <div className='departure'>
                <div className='mb-1'>MID</div>   
                <div><i className="fas fa-plane-departure mr-1 ml-1"></i> 10:58</div> 
            </div>
            <div className='line-flight'></div>
            <div className='arrival'>
                <div className='mb-1'>CDMX</div>
                <div>19:55 <i className="fas fa-plane-arrival mr-1 ml-1"></i></div>
            </div>
            <div className='ammount'>$ 2,450 MXN</div>
            <div className='actions'>
                <button className='btn btn-primary'><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}
