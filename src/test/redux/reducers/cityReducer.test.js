import { types } from '../../../redux/types/types'
import { cityReducer } from '../../../redux/reducers/cityReducer'

describe('Pruebas en cityReducer', () => {
    const initialState = {
        citys:[]
    }
    test('Prueba en Carga de Ciudades', () => {   
        const citys = [{
            id:"qf4AiSXM9VshDmbZ9ykS",
            name:"Acapulco",
            code:"ACA"
        }]
        const action = {
            type: types.LOADED_CITYS,
            payload: citys
        }
        const state = cityReducer(initialState,action)
        expect(state.citys).toEqual(citys)
        expect(state.citys).toEqual([
            {
                id:"qf4AiSXM9VshDmbZ9ykS",
                name:"Acapulco",
                code:"ACA"
            }
        ])
    })
})