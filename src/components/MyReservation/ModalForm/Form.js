import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const Form = (props) => {
    const {name, lastname, address, email, handleInputChange, handleReserve} = props
    const {form_valid} = useSelector(state => state.reserve)
    const [showMessage, setShowMessage] = useState(false)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        setShowMessage(true)
        setTimeout(() => {
            handleReserve()
            setShowMessage(false)
        }, 3000)
        
    }

    return (
        <div className='modal-form'>
            <div className='container-form'>
                <div>
                    {
                        !showMessage ?
                                <>
                                    <h2>Datos Adicionales</h2>
                                    <form className='form' onSubmit={handleSubmitForm}>
                                        <input type='text' placeholder='Nombre' name='name' className='test' autoComplete="off" value={name} onChange={handleInputChange}/>    
                                        <input type='text' placeholder='Apellidos' name='lastname' className='' autoComplete="off" value={lastname} onChange={handleInputChange}/> 
                                        <input type='text' placeholder='Dirección' name='address' className='' autoComplete="off" value={address} onChange={handleInputChange}/> 
                                        <input type='text' placeholder='Email' name='email' className='' autoComplete="off" value={email} onChange={handleInputChange}/>
                                        <button type='submit' className='btn btn-primary' disabled={!form_valid}>Reservar</button>
                                    </form>
                                </>
                            : <h2>Gracias por tu reserva!</h2>
                    }
                </div>
            </div>
        </div>
    )
}
