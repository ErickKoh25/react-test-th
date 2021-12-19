import React from 'react'
import { Link } from 'react-router-dom'

export const NavBrand = ({img}) => {
    return (
        <div className='navbar-brand'>
            
            {
                img ? 
                    <img src={img} alt='logo-aerolinea'/>
                :   <Link to='/'>
                        <h2>
                            Mi Aerolinea
                            <i className="fas fa-plane"></i>
                        </h2>
                    </Link>
            }  
        </div>
    )
}
