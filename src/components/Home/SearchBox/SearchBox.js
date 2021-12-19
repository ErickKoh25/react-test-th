import React, { useState } from 'react'
import { SelectPassengers } from '../../General/Selectors/SelectPassengers'
import { SwitchSelector } from '../../General/Selectors/SwitchSelector'
import { SearchInput } from './SearchInput/SearchInput'
import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';
export const SearchBox = () => {
    const [today, onChange] = useState(new Date());
    const [openCalendar, setOpenCalender] = useState(false)
    const handleOpenCalendar = () => {
        setOpenCalender(true)
    }
    const handleSwitchSelector = () => {
        console.log('switchSelector')
    }
    return (
        <>
            <div className='container'>
                <div className='search-box'>
                    <div className='detail-info'>
                        <div className='switch-selector mt-3'>
                            Sencillo
                            <SwitchSelector onChange={handleSwitchSelector}/>
                            Redondo
                        </div>
                        <div className='select-passengers mt-3'>
                            Adultos
                            <SelectPassengers />
                        </div>
                        {/* <div className='select-passengers mt-3'>
                            Niños
                            <SelectPassengers />
                        </div> */}
                    </div>
                    <div className='inputs-container mt-3'>
                        <SearchInput placeholder={'Origen'} icon={'fas fa-plane-departure'} className={'home-input'}/>
                        <div className='mr-3 ml-3'>
                            <i className="fas fa-exchange-alt"></i>
                        </div>
                        <SearchInput placeholder={'Destino'} icon={'fas fa-plane-arrival'} className={'home-input'}/>
                    </div>
                    <div className='calendar-container mt-3'>
                        <div className='input-calendar'>
                            <div className='calendar'>
                                <DateRangePicker
                                    onChange={onChange}
                                    value={today}
                                    selectRange={true}
                                    minDate={new Date()}
                                    shouldCloseOnSelect={true}
                                    className={'my-calendar'}
                                    calendarIcon={null}
                                /> 
                            </div>
                        </div>
                        <div className='ml-3'>
                            <button className='btn btn-primary'>
                                Buscar
                                <i className="fas fa-search ml-1"></i> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
