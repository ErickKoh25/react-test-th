import React from 'react'
import { NavBrand } from './NavBrand/NavBrand';
import logo from '../../assets/img/hawai-airlanes.png'
import { NavMenu } from './NavMenu/NavMenu';
import { Navigate, Route } from 'react-router-dom';
import { Home } from '../Home/Home';
export const NavBar = () => {
    return (
        <nav className='navbar'>
            <NavBrand/>
            <NavMenu />
        </nav>
    )
}
