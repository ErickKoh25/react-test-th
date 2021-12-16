import React from 'react'

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                {/* <img/> */}
                <h2>Mi Aerolinea</h2>
            </div>
            <div class='menu'>
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
