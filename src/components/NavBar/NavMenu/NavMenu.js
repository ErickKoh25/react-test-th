import React from 'react'
import { ListUl } from '../../General/List/ListUl'

export const NavMenu = () => {
    const list = [
        {
            name:'Mis Reservaciones',
            type:'link',
            path:'/my-reservations'
        }
    ]
    return (
        <div className='menu'>
            <ListUl list={list} />
        </div>
    )
}
