import { types } from "../types/types";

export const setDataSelectedFlight = (data) => ({
    type: types.dataSelectedFlight,
    payload: data
})

export const searchingFlights = (data) => ({
    type: types.searchingFlights,
    payload: data
})

export const setFlightsFromDeparture = (data) => ({
    type: types.flightsLoadedFromDeparture,
    payload: data
})

export const setFlightsFromArrival= (data) => ({
    type: types.flightsLoadedFromArrival,
    payload: data
})