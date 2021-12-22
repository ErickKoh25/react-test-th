import { types } from '../../../redux/types/types'
import { flightReducer } from '../../../redux/reducers/flightReducer'

describe('Pruebas en flightReducer', () => {

    const initialState = {
        data_searchbox_flight: { id_departure: null, id_arrival: null, dates: new Date, round_flight: false, passengers: 1 },
        searching_flight: null,
        flights_from_origin: [],
        flights_from_destination: [],
        selected_origin_flight:false,
        selected_destination_flight:false
    }

    test('Prueba en almacenamiento de vuelos seleccionados en el searchbox', () => {
        const data = {id_departure: 'qf4AiSXM9VshDmbZ9ykS', id_arrival: 'jhdUy31WmSwTWR07J5Ja', dates: new Date, round_flight: false, passengers: 10 }
        const action = {
            type: types.SET_DATA_SEARCHBOX_FLIGHT,
            payload: data
        }
        const state = flightReducer(initialState,action)
        expect(state.data_searchbox_flight).toEqual(data)
        expect(state.data_searchbox_flight.round_flight).toBe(false)

    })

    test('Prueba en Selección de Vuelo de Origen - status si un vuelo es seleccionado previo a reservación', () => {
        const action = {
            type: types.SELECT_ORIGIN_FLIGHT,
            payload: true
        }
        const state = flightReducer(initialState,action)
        expect(state.selected_origin_flight).toBe(true)
    })
    
    test('Prueba en Asignación de vuelos de origen cargados', () =>{

        const flights = [{
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
        }]
        const action = {
            type: types.LOADED_FLIGHTS_FROM_ORIGIN,
            payload: flights
        }
        const state = flightReducer(initialState,action)
        expect(state.flights_from_origin).toEqual(flights)
    })
})