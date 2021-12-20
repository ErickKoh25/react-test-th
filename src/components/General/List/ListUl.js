import React from 'react'
import { NavLink } from 'react-router-dom'

export const ListUl = ({list='', icon='', func='', type=''}) => {
    return (
        <ul>
            {
                list.map((l,i) => 
                    <li key={i}>
                        {   
                            l.type=='link'
                                ?   <NavLink to={l.path}>
                                        {   
                                            icon!=''
                                                ? <i className={icon}></i>
                                                :' '
                                        }
                                        {l.name}
                                    </NavLink> 
                                :   <span onClick={()=> {func(l.id, l.name, type)}}>
                                        {   
                                            icon!=''
                                                ? <i className={icon}></i>
                                                :' '
                                        }
                                        {l.name}
                                    </span>
                        }
                    </li>)
            }                   
        </ul>
    )
}
