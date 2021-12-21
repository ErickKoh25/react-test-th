import React from 'react'
import { ListUl } from '../../General/List/ListUl'

export const NavMenu = () => {
    const list = [
        {
            name:'Mis Reservaciones',
            type:'link',
            path:'/my-reservations'
        },
        {
            name:'Login',
            type: 'link',
            path:'/login'
        }
    ]
    return (
        <div className='menu'>
            <ListUl list={list} />
        </div>
    )
}
