import React from 'react'

export const NavBrand = ({img}) => {
    return (
        <div className='navbar-brand'>
            
            {
                img ? 
                    <img src={img} alt='logo-aerolinea'/>
                :   <h2>
                        Mi Aerolinea
                        <i class="fas fa-plane"></i>
                    </h2>
            }

            
        </div>
    )
}
