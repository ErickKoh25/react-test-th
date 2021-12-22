import React, { memo } from 'react'
import { NavBrand } from './NavBrand/NavBrand';
import { NavMenu } from './NavMenu/NavMenu';
export const NavBar = memo(() => {
    return (
        <nav className='navbar'>
            <NavBrand/>
            <NavMenu />
        </nav>
    )
})
