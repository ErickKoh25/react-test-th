import React from 'react'
import { BrowserRouter as Router,Route, Routes, Navigate    } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { MyReservation } from '../components/MyReservation/MyReservation'
import { NavBar } from '../components/NavBar/NavBar'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <>
                    <NavBar/>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/my-reservations' element={<MyReservation/>}/>

                        <Route path='/' element={<Navigate to='/' />} />
                    </Routes>
                </>
                
            </Router>
        </div>
    )
}
