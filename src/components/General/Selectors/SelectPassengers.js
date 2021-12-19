import React from 'react'
import { useCounter } from '../../../hooks/useCounter';

export const SelectPassengers = ({text=''}) => {
    const {counter, increment, decrement, reset} = useCounter(1);
    console.log(counter)
    return (
        <div className='number-passengers'>
            <button onClick={ () => decrement() }>
                -
            </button>
            <label>{counter}</label>
            <button onClick={ () => increment() }>
                +
            </button>
        </div>
    )
}
