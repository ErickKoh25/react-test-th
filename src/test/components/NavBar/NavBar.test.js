import '../../../setupTests';
import React from 'react'
import {mount} from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { NavBar } from '../../../components/NavBar/NavBar';
import { MemoryRouter } from 'react-router-dom'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <NavBar/> 
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en NavBar', () => {
    
    test('Debe mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
})