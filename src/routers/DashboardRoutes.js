import React from 'react'
import { Redirect, Routes, Route, Switch, Navigate } from 'react-router'
import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'
import { MyReservation } from '../components/MyReservation/MyReservation'

export const DashboardRouters = () => {
    return (
        <>
           <NavBar/>
           <div className='container mt-2'>
                <Route exact path='/' component={Home}/>
                <Route exact path='/my-reservations' component={MyReservation}/>

                <Route path='/' element={<Navigate to='/' />} />
           </div>
        </>
    )
}