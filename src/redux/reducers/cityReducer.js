import { types } from "../types/types";
const initialState = {
    citys:[]
}
export const cityReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.LOADED_CITYS:
            return {
                ...state,
                citys: [...action.payload]
            }
        
        default:
            return state;
    }
}