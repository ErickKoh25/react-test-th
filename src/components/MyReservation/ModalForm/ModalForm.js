import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const ModalForm = () => {
    const [formValues, handleInputChange] = useForm({
        name:'',
        lastname:'',
        address: '',
        email:'',
    })
    const {name,lastname,address,email} = formValues;

    const handleReserve = (e) => {
        e.preventDefault()
    }
    return (
        <div className='modal-form'>
            <div className='container-form'>
                <form className='form' onSubmit={handleReserve}>
                    <input type='text' placeholder='Nombre' name='name' className='auth__input' autoComplete="off" value={name} onChange={handleInputChange}/>    
                    <input type='text' placeholder='Apellidos' name='lastname' className='auth__input' autoComplete="off" value={lastname} onChange={handleInputChange}/> 
                    <input type='text' placeholder='Dirección' name='address' className='auth__input' autoComplete="off" value={address} onChange={handleInputChange}/> 
                    <input type='text' placeholder='Email' name='email' className='auth__input' autoComplete="off" value={email} onChange={handleInputChange}/>
                    <button type='submit' className='btn btn-primary'>Reservar</button>
                </form>
            </div>
        </div>
    )
}
