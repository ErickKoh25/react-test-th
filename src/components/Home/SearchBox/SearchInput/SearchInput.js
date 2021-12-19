import React, { useRef, useState } from 'react'
import { ListOptions } from '../ListOptions/ListOptions'

export const SearchInput = ({className='',placeholder='', icon=''}) => {
    const [openOptions, setOpenOptions] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const handleOpenOptions = ({target}) => {
        console.log(target)
        setOpenOptions(true)
    }
    const handleCloseOptions = ({target}) => {
        setOpenOptions(false)
    }
    const handleSearch = ({target}) => {
        console.log(target.value)
        setSearchValue(target.value)
    }
    return (
        <div className={className}>
            <input type='text' name={placeholder} placeholder={placeholder} onChange={handleSearch} onFocus={handleOpenOptions} onBlur={handleCloseOptions} />
            {
                openOptions
                    ? <ListOptions search={searchValue} icon={icon} />
                    : ''
            }
            
        </div>
    )
}
