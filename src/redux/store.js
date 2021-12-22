import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { cityReducer } from './reducers/cityReducer';
import { flightReducer } from './reducers/flightReducer'
import { cartReducer } from './reducers/cartReducer';
import { reserveReducer } from './reducers/reserveReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    city: cityReducer,
    flight: flightReducer,
    cart: cartReducer,
    reserve: reserveReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)