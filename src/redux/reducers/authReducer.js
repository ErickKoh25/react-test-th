import { types } from "../types/types";

/* 
    {} state vacio cuando no esté authenticado
    { // Autenticado
        uid,
        name
    }
*/
export const authReducer = (state={}, action) => {
    switch(action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout: 
            return {}
        default:
            return state;
    }
}
