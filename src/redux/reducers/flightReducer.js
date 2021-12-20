import { types } from "../types/types";
const initialState = {
    data_searchbox_flight: { id_departure: null, id_arrival: null, dates: new Date, round_flight: false, passengers: 1 },
    searching_flight: null,
    flights_from_origin: [],
    flights_from_destination: [],
    selected_origin_flight:false,
    selected_destination_flight:false
};
export const flightReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.SET_DATA_SEARCHBOX_FLIGHT:
            return {
                ...state,
                data_searchbox_flight: action.payload
            }
        case types.SEARCHING_FLIGHTS: 
            return {
                ...state,
                searching_flight: action.payload
            }
        case types.LOADED_FLIGHTS_FROM_ORIGIN:
            return {
                ...state,
                flights_from_origin: action.payload
            }
        case types.LOADED_FLIGHTS_FROM_DESTINATION:
            return {
                ...state,
                flights_from_destination: action.payload
            }
        case types.SELECT_ORIGIN_FLIGHT:
            return {
                ...state,
                selected_origin_flight: action.payload
            }
        case types.SELECT_DESTINATION_FLIGHT:
            return {
                ...state,
                selected_destination_flight: action.payload
            }
        
        default:
            return state;
    }
}