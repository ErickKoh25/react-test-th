import React from 'react'
import { NavBrand } from './NavBrand/NavBrand';
import { NavMenu } from './NavMenu/NavMenu';
export const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavBrand/>
            <NavMenu />
        </nav>
    )
}
