import { types } from "../types/types";

export const SET_IS_FORM_VALID = (isValid) => ({
    type: types.SET_IS_FORM_VALID,
    payload: isValid
})

export const SET_FORM_DATA = (data) => ({
    type: types.SET_FORM_DATA,
    payload: data
})

export const SET_RESERVATIONS = (data) => ({
    type: types.SET_RESERVATIONS,
    payload: data
})

export const SHOW_HIDE_MODAL_FORM = (data) => ({
    type: types.SHOW_HIDE_MODAL_FORM,
    payload: data
})