import React, { useRef, useState } from 'react'
import { ListOptions } from '../ListOptions/ListOptions'

export const SearchInput = ({className='',placeholder='', icon='', type='', func=''}) => {
    const [openOptions, setOpenOptions] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [selectedCiy,setSelectedCity] = useState('')

    const handleOpenOptions = () => {
        setOpenOptions(true)
    }

    const handleSearch = ({target}) => {
        setSearchValue(target.value)
        setSelectedCity(target.value)
    }
    
    const handleSelectCity = (id, name, type) => {
        func(id,type)
        setSelectedCity(name)
        setOpenOptions(false)
    }
    return (
        <div className={className}>
            <input type='text' autoComplete='off' name={type} placeholder={placeholder} value={selectedCiy} onChange={handleSearch} onFocus={handleOpenOptions} />
            {
                openOptions
                    ? <ListOptions search={searchValue} icon={icon} type={type} func={handleSelectCity} />
                    : ''
            }
            
        </div>
    )
}
