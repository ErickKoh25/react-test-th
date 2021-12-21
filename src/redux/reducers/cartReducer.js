import { types } from "../types/types";
const initialState = { 
    cart_flights: []
};
export const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.ADD_NEW_FLIGHTS:
            return {
                ...state,
                cart_flights: state.cart_flights.concat(action.payload)
            }
        case types.UPDATE_PASSENGER_FLIGHT:
            return {
                ...state,
                cart_flights: state.cart_flights.filter(flight => {
                    if(flight.id == action.payload.id){
                        flight.passenger = flight.passenger + action.payload.passenger
                    }
                    return flight
                })
            }
        case types.DELETE_FLIGHT:
            return {
                ...state,
                cart_flights: state.cart_flights.filter( flight => flight.id != action.payload.id)
            }
        case types.REMOVE_LAST_FLIGHT: {
            return {
                ...state,
                cart_flights: state.cart_flights.pop()
            }
        }
        case types.DELETE_ALL_FLIGHTS: {
            return {
                ...state,
                cart_flights: []
            }
        }
        default:
            return state;
    }
}