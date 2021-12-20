import { types } from "../types/types";

export const cityReducer = (state={}, action) => {
    switch(action.type) {
        case types.citysLoaded:
            return {
                ...state,
                citys: [...action.payload]
            }
        
        default:
            return state;
    }
}