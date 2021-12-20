import { types } from "../types/types";

export const ADD_NEW_FLIGHTS = (flights) => ({
    type: types.ADD_NEW_FLIGHTS,
    payload: flights
})

export const DELETE_FLIGHT = (flight) => ({
    type: types.DELETE_FLIGHT,
    payload: flight
})

export const REMOVE_LAST_FLIGHT = () => ({
    type: types.REMOVE_LAST_FLIGHT,
    payload: true
})
