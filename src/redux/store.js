import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer';
import { cityReducer } from './reducers/cityReducer';
import { flightReducer } from './reducers/flightReducer'
import { cartReducer } from './reducers/cartReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    city: cityReducer,
    flight: flightReducer,
    car: cartReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)