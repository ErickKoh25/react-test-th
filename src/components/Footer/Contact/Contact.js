import React from 'react'

export const Contact = () => {
    return (
        <div className='contact'>
            <h2> Contacto </h2>
            <span className='mt-3'><i className="fas fa-phone-alt"></i> 55 32 234 656</span>
            <span className='mt-3'><i className="fab fa-whatsapp-square"></i> <a href='https://api.whatsapp.com/send/?phone=5587848342000' target='_blank'>55 87 848 342</a></span>
            <span className='mt-3'><i className="fas fa-envelope"></i> <a href='mailto:support@miaerolinea.com'>support@miaerolinea.com</a></span>
        </div>
    )
}
