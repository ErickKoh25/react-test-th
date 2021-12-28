import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_FORM_VALID, SET_FORM_DATA, SET_RESERVATIONS, SHOW_HIDE_MODAL_FORM } from '../../../redux/actions/reserve';
import { DELETE_ALL_FLIGHTS } from '../../../redux/actions/cart';
import { Form } from './Form';


export const ModalForm = () => {
    const dispatch = useDispatch()
    const {flights} = useSelector(state => state.cart)
    const {show_hide_modal_form} = useSelector(state => state.reserve)

    const [openForm, setOpenForm] = useState(false)

    const [formValues, handleInputChange] = useForm({
        name:'',
        lastname:'',
        address: '',
        email:'',
    })
    const {name,lastname,address,email} = formValues;
    
    useEffect(() => {
        isFormValid()
    }, [name,lastname,address,email])

    useEffect(() => {
        if(show_hide_modal_form) {
            setOpenForm(true)
        } else {
            setOpenForm(false)
        }
    }, [show_hide_modal_form])

    const isFormValid = () => {
        if( validator.isEmpty(name.trim()) || 
            validator.isEmpty(lastname.trim()) || 
            validator.isEmpty(address.trim()) || 
            !validator.isEmail(email) ){
            dispatch(SET_IS_FORM_VALID(false))
        } else {
            dispatch(SET_IS_FORM_VALID(true))
        }
    }

    const handleReserve = () => {
        // e.preventDefault()
        dispatch(SET_FORM_DATA(formValues))
        dispatch(SET_RESERVATIONS(flights))
        dispatch(DELETE_ALL_FLIGHTS())
        dispatch(SHOW_HIDE_MODAL_FORM(false))
    }
    const handleCloseModal = () => {
        dispatch(SHOW_HIDE_MODAL_FORM(false))
    }

    return (
        <>
            { 
                openForm && <Form name={name} lastname={lastname} address={address} email={email} handleInputChange={handleInputChange} handleReserve={handleReserve} handleCloseModal={handleCloseModal} />
            } 
        </>
    )
}
