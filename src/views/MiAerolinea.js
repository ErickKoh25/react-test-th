import React from 'react'
import { Home } from '../components/Home/Home';
import {Provider} from 'react-redux';
import { AppRouter } from '../routers/AppRouter';
import { store } from '../redux/store'

export const MiAerolinea = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
