import React, { memo, useEffect, useRef, useState } from 'react'
import { SelectPassengers } from '../../General/Selectors/SelectPassengers'
import { SwitchSelector } from '../../General/Selectors/SwitchSelector'
import { SearchInput } from './SearchInput/SearchInput'
import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import 'react-calendar/dist/Calendar.css';
import { ResultSearch } from '../../Modal/ResultSearch';
import { loadCitys, searchFlights } from '../../../helpers/loadData';
import { setCitys } from '../../../redux/actions/citys';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { SET_DATA_SEARCHBOX_FLIGHT, SEARCHING_FLIGHTS } from '../../../redux/actions/flight';
export const SearchBox = () => {

    const dispatch = useDispatch()
    const {searching_flight} = useSelector(state => state.flight)
    const [dates, onChangeDate] = useState(new Date());
    const [rounded, setRounded] = useState(false)
    const [openModal,setOpenModal] = useState(false)
    
    const [formValues,handleInputChange] = useForm({
        id_departure:null,
        id_arrival: null,
        round_flight: false,
        dates: null,
        passengers:1
    })

    useEffect(async() => {
        const citys = await loadCitys()
        dispatch(setCitys(citys))
    }, [searching_flight])

    useEffect(() => {
        handleInputChange({target:{name:'dates',value:dates}})
    }, [dates])

    const handleSelectPassengers = (number) => {
        handleInputChange({target:{name:'passengers',value:number}})
    }

    const handleInputChangeCity = (id,type) => {
        handleInputChange({target:{name:(type=='departure') ? 'id_departure' : 'id_arrival', value:id}})
    }

    const handleRoundedSwitch = ({target}) => {
        setRounded(target.checked)
        if(target.checked) {
            onChangeDate([new Date(), new Date()])
        } else{
            onChangeDate(new Date())
        }
        handleInputChange({target:{name:'round_flight',value:target.checked}})
    }

    const handleSearchFlight = () => {

        dispatch(SET_DATA_SEARCHBOX_FLIGHT(formValues))
        dispatch(SEARCHING_FLIGHTS(true))

        dispatch(searchFlights)
        setOpenModal(true)
        
    }
    return (
        <>
            <div className='container'>
                <div className='search-box'>
                    <div className='detail-info'>
                        <div className='switch-selector mt-3'>
                            Sencillo
                            <SwitchSelector name={'round_flight'} func={handleRoundedSwitch}/>
                            Redondo
                        </div>
                        <div className='select-passengers mt-3'>
                            Pasajeros
                            <SelectPassengers func={handleSelectPassengers} />
                        </div>
                    </div>
                    <div className='inputs-container mt-3'>
                        <SearchInput placeholder={'Origen'} icon={'fas fa-plane-departure'} className={'home-input'} type='departure' func={handleInputChangeCity}/>
                        <div className='mr-3 ml-3'>
                            <i className="fas fa-exchange-alt"></i>
                        </div>
                        <SearchInput placeholder={'Destino'} icon={'fas fa-plane-arrival'} className={'home-input'} type='arrival' func={handleInputChangeCity}/>
                    </div>
                    <div className='calendar-container mt-3'>
                        <div className='input-calendar'>
                            <div className='calendar'>
                                <DateRangePicker
                                    onChange={onChangeDate}
                                    value={dates}
                                    selectRange={rounded}
                                    minDate={new Date()}
                                    shouldCloseOnSelect={true}
                                    className={'my-calendar'}
                                    clearIcon={null}
                                /> 
                            </div>
                        </div>
                        <div className='ml-3'>
                            <button className='btn btn-primary' onClick={handleSearchFlight}>
                                Buscar
                                <i className="fas fa-search ml-1"></i> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                <ResultSearch className={openModal ? 'open' : ''} func={setOpenModal} />   
            }
        </>
    )
}
