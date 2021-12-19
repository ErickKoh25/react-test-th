import React from 'react'

export const LogoFooter = ({img}) => {
    return (
        <div className='logo-footer'>
            
            {
                img ? 
                    <img src={img} alt='logo-aerolinea'/>
                :   <h2>
                        Mi Aerolinea
                        <i className="fas fa-plane"></i>
                    </h2>
            }  
        </div>
    )
}