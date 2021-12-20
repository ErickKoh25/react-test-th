import { types } from "../types/types";
const initialState = {
    data_selected_flight: { id_departure: null, id_arrival: null, round_flight: false, passengers: 1 },
    searching_flight: false,
    flights_from_departure: [],
    flights_from_arrival: []
};
export const flightReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.dataSelectedFlight:
            return {
                ...state,
                data_selected_flight: action.payload
            }
        case types.searchingFlights: 
            return {
                ...state,
                searching_flight: action.payload
            }
        case types.flightsLoadedFromDeparture:
            return {
                ...state,
                flights_from_departure: action.payload
            }
        case types.flightsLoadedFromArrival:
            return {
                ...state,
                flights_from_arrival: action.payload
            }
        default:
            return state;
    }
}