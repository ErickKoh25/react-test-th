import React, { memo, useEffect } from 'react'
import { useCounter } from '../../../hooks/useCounter';

export const SelectPassengers = memo(({text='',func}) => {

    const {counter, increment, decrement, reset} = useCounter(1);
    
    useEffect(() => {
        func(counter)
    }, [counter])
   
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
})
