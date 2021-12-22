import React, { useState } from 'react'
import { ListUl } from '../../General/List/ListUl'

export const NavMenu = () => {
    const [active, setActive] = useState(false)
    const list = [
        {
            name:'Mis Reservaciones',
            type:'link',
            path:'/my-reservations'
        }
    ]
    return (
        <>  
            <i className="fas fa-bars pointer" onClick={()=>{setActive(!active)}}></i>
            <div className={`menu ${(active) ? 'active' : ''}`}>
                <ListUl list={list} />
            </div>
        </>
    )
}
