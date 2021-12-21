import React from 'react'
import { Footer } from '../Footer/Footer'
import { BackgroundImage } from '../Home/BackgroundImage/BackgroundImage'
import { ListReservations } from './ListReservations/ListReservations'
import { ModalForm } from './ModalForm/ModalForm'

export const MyReservation = () => {
    return (
        <>
            <section className='my-reservations'>
                <ListReservations />
                <ModalForm />
            </section>
            <Footer/>
        </>
        
    )
}
