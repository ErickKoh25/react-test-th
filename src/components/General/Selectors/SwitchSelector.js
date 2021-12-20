import React, { memo } from 'react'

export const SwitchSelector = memo(({name,func}) => {
    return (
        <label className="switch mr-3 ml-3">
            <input type="checkbox" name={name} onChange={func}/>
            <span className="slider round"></span>
        </label>
    )
})
