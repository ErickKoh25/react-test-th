import '../../../setupTests';
import React from 'react'
import {mount} from 'enzyme'
import { Home } from '../../../components/Home/Home';
import { Provider } from 'react-redux'

describe('Pruebas en <Home />', () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Home/>
            </Provider> 
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper).find('.navbar').toBe(true)
    })
})