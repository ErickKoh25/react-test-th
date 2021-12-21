import React from 'react'
import { Footer } from '../Footer/Footer'
import { ModalForm } from './ModalForm/ModalForm'
import { ListData } from './ListData/ListData';

export const MyReservation = () => {
    return (
        <>
            <section className='my-reservations'>
                <ListData />
                <ModalForm />
            </section>
            <Footer/>
        </>
        
    )
}
