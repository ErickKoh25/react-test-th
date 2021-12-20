import { types } from "../types/types";

export const SET_DATA_SEARCHBOX_FLIGHT = (data) => ({
    type: types.SET_DATA_SEARCHBOX_FLIGHT,
    payload: data
})

export const SEARCHING_FLIGHTS = (data) => ({
    type: types.SEARCHING_FLIGHTS,
    payload: data
})

export const SET_FLIGHTS_FROM_ORIGIN = (data) => ({
    type: types.LOADED_FLIGHTS_FROM_ORIGIN,
    payload: data
})

export const SET_FLIGHTS_FROM_DESTINATION = (data) => ({
    type: types.LOADED_FLIGHTS_FROM_DESTINATION,
    payload: data
})

export const SELECT_ORIGIN_FLIGHT = (data) => ({
    type: types.SELECT_ORIGIN_FLIGHT,
    payload: data
})

export const SELECT_DESTINATION_FLIGHT = (data) => ({
    type: types.SELECT_DESTINATION_FLIGHT,
    payload: data
})