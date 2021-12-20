import React from 'react'
import { useSelector } from 'react-redux'
import { ListUl } from '../../../General/List/ListUl'

export const ListOptions = ({search='', icon='', type='', func=''}) => {
    
    const {citys} = useSelector(state => state.city)
    const items = (search!='') ? citys.filter(l => l.name.toLowerCase().includes(search.toLowerCase())) : citys

    return (
        <div className='list-options'>
            <ListUl list={items} icon={icon} type={type} func={func}/>
        </div>
    )
}
