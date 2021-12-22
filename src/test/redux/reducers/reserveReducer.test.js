import { types } from '../../../redux/types/types'
import { reserveReducer } from '../../../redux/reducers/reserveReducer';

describe('Pruebas en reserveReducer', () => {
    const initialState = { 
        form_data: {name:'', last_name:'', address:'', email:''},
        form_valid: false,
        show_hide_modal_form: false,
        reservations: []
    };
    test('Debe establecer si el formulario es válido para reservar', () => {
        const action = {
            type:types.SET_IS_FORM_VALID,
            payload: true
        }
        const state = reserveReducer(initialState,action)
        expect(state.form_valid).toBe(true)
    })
    test('Debe establecer los datos personales de la reservación', () => {
        const formData = {
            name: 'Erick',
            lastname: 'Koh Santamaria',
            address: 'C. 97F #748 entre 66B y 66C, Fracc. Manzana 115',
            email: 'erick_koh25@hotmail.com'
        }
        const action = {
            type:types.SET_FORM_DATA,
            payload: formData
        }

        const state = reserveReducer(initialState,action)
        expect(state.form_data).toEqual(formData)
    })

})