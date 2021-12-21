import { types } from "../types/types";
const initialState = { 
    form_data: {name:'', last_name:'', address:'', email:''},
    form_valid: false,
    show_hide_modal_form: false,
    reservations: []
};
export const reserveReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.SET_IS_FORM_VALID: {
            return {
                ...state,
                form_valid: action.payload
            }
        }
        case types.SET_FORM_DATA: {
            return {
                ...state,
                form_data: action.payload
            }
        }
        case types.SET_RESERVATIONS: {
            return {
                ...state,
                reservations: action.payload
            }
        }
        case types.SHOW_HIDE_MODAL_FORM: {
            return {
                ...state,
                show_hide_modal_form: action.payload
            }
        }
        default:
            return state;
    }
}