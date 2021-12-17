import React from 'react'
import { NavBrand } from './NavBrand';
import logo from '../../assets/img/hawai-airlanes.png'
export const NavBar = () => {
    const links = [
        {
            title:'Mis Reservas',
            path:'/reservas'
        },
        {
            title:'Registrate',
            path:'/registro'
        },
        {
            title:'Iniciar Sesión',
            path:'/login'
        },
    ]
    return (
        <nav className='navbar'>
            <NavBrand img={''}/>
            {/* <NavMenu links={links} /> */}
            <div className='menu'>
                <ul>
                    <li>
                        <a>
                            Mis Reservaciones
                        </a>
                    </li>
                    <li>
                        <a>
                            Registrate
                        </a>
                    </li>
                    <li>
                        <a>
                            Iniciar Sesión
                        </a>
                    </li>                        
                </ul>
            </div>
        </nav>
    )
}
