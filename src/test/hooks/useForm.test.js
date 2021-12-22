import {act, renderHook} from "@testing-library/react-hooks"
import {useForm} from "../../hooks/useForm"

describe('Pruebas del useForm',() => {
    const initialForm = {
        name: 'Erick',
        lastname: 'Koh',
        address: 'C. 97F #748 entre 66B y 66C, Merida, yucatan',
        email: 'erick_koh25@hotmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook( () => useForm(initialForm))
        //console.log(result.current[0])
        const values = result.current[0]
        expect(values).toEqual(initialForm)
        //expect({name:'erick',email:'fernando@hotmail.com'}).toEqual(initialForm)
    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm))
        const handleInputChange = result.current[1]
        act(()=> {
            handleInputChange({target:{name:'name',value:'Emmanuel'}})
        })
        //console.log(result.current[0])
        const [formValues] = result.current
        expect(formValues).toEqual({...initialForm, name:'Emmanuel'})
        expect({name:'Emmanuel',lastname:'Koh',address: "C. 97F #748 entre 66B y 66C, Merida, yucatan",email:'erick_koh25@hotmail.com'}).toMatchObject(result.current[0])
    })

    test('debe de re-establecer el formulario con RESET', () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [init,handleInputChange,reset] = result.current
        act(()=> {
            handleInputChange({target:{name:'name',value:'erick'}})
            reset()
        })
        expect(init).toMatchObject(result.current[0])
    })
})