import React from 'react'
import { ListUl } from '../../../General/List/ListUl'

export const ListOptions = ({search='', icon=''}) => {
    console.log(search)
    const options = [
        {
            id:1,
            name: 'Mérida',
        },
        {
            id:2,
            name: 'Cd. México',
        },
        {
            id:3,
            name: 'Monterrey',
        }
    ]
    const items = (search!='') ? options.filter(l => l.name.toLowerCase().includes(search.toLowerCase())) : options
    return (
        <div className='list-options'>
            <ListUl list={items} icon={icon}/>
        </div>
    )
}
