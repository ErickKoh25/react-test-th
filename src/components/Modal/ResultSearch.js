import React, { useState, useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
import { DataSearch } from './DataSearch/DataSearch'
import { EmptySearch } from './Empty/EmptySearch'
import { Loader } from '../General/Loader/Loader';

export const ResultSearch = memo(({className,func}) => {

    const {flights_from_origin, flights_from_destination, searching_flight} = useSelector(state => state.flight)

    const [showLoader, setShowLoader] = useState(false)
    const [openDataSearch, setOpenDataSearch] = useState('')
    const [isEmpty,setIsEmpty] = useState('')

    useEffect(() => {
        
        if(flights_from_origin.length > 0) {
            setIsEmpty('')
            setOpenDataSearch('open')
         } else if(searching_flight) {
            setIsEmpty('open')
            setOpenDataSearch('')
        }
        
        if(searching_flight) {
            setShowLoader(true)
        } else {
            setShowLoader(false)
        }

    }, [flights_from_origin,searching_flight])

    const handleOnClick = (click) => {
        setIsEmpty('')
        setOpenDataSearch('')
        func(click)
    }
    
    return (
        <div className={`${className} result-search`}>
            {   
                showLoader && <Loader />
            }
            {
                !showLoader && 
                    <>
                        <DataSearch className={openDataSearch} items1={flights_from_origin} items2={flights_from_destination} func={handleOnClick}/>        
                        <EmptySearch className={isEmpty} func={handleOnClick} />
                    </>
            }
            
        </div>
    )
})
