import { types } from '../../../redux/types/types'
import { cartReducer } from '../../../redux/reducers/cartReducer'

describe('Pruebas en cartReducer', () => {
    const initialState = {
        flights: [],
        form_valid: false
    }
    const newFlight = {
        id:"pDsmjmfXzTOvqtYrYrto",
        available:40,
        takeoff:"8:50",
        ammount:1900,
        origen:"eZI8xDGzYFslOto4I2TJ",
        destino:"19Vn0vocopz3pvZoiTfH",
        landing:"10:55",
        date:{
            seconds:1640357100,
            nanoseconds:0
        },
        city_dp:{
            id:"eZI8xDGzYFslOto4I2TJ",
            code:"MID",
            name:"Mérida"
        },
        city_arr:{
            id:"19Vn0vocopz3pvZoiTfH",
            code:"VER",
            name:"Veracruz"
        },
        passengers:1
    }
    test('Prueba Agregando vuelos al carrito ', () => {
        const action = {
            type: types.ADD_NEW_FLIGHTS,
            payload: newFlight
        }
        const state = cartReducer(initialState,action)
        expect(state.flights).toEqual([newFlight])
        expect(state.flights).toEqual([])
    })

    test('Prueba Removiendo el último vuelo agregado', () => {
        const initialState = {
            flights: [newFlight],
            form_valid: false
        }
        const action = {
            type: types.REMOVE_LAST_FLIGHT,
            payload: true
        }
        const state = cartReducer(initialState,action)
        expect(state.flights).toEqual([])
    })
})