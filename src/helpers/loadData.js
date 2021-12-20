import { db } from "../config/firebase-config";
import { collection, orderBy, query, where, getDocs } from "firebase/firestore";
import { SEARCHING_FLIGHTS, SET_FLIGHTS_FROM_DESTINATION, SET_FLIGHTS_FROM_ORIGIN } from "../redux/actions/flight";

export const loadCitys = async () => {
    const citysSnap = await db.collection('Ciudades').get()
    let citys = []
    citysSnap.forEach( snap=> {
        citys.push({
            id: snap.id,
            ...snap.data()
        })
    })
    citys = citys.sort(SortArray)
    return citys
}
export const SortArray = (x,y) => {
    return x.name.localeCompare(y.name);
}

export const searchFlights = async (dispatch, getState) => {
    const {citys} = getState().city
    const {id_departure, id_arrival, round_flight, dates} = getState().flight.data_searchbox_flight
    let flights_from_origin = []
    let flights_from_return = []

    const date1 = (round_flight) ? dates[0] : dates
    const date2 = (round_flight) ? dates[1] : null
    
    // 1er Vuelo
    const q = query(
        collection(db,'Horarios'), 
        where("origen", "==",id_departure),
        where("destino", "==",id_arrival),
        where("date", ">=", date1),
        orderBy("date","asc")
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((d) =>{
        flights_from_origin.push({
            id:d.id,
            ...d.data()
        })
    })

    // 2do Vuelo
    if(date2!=null) {
        // console.log(date2)
        const q2 = query(
            collection(db,'Horarios'), 
            where("origen", "==",id_arrival),
            where("destino", "==",id_departure),
            where("date", "<=",date2),
            orderBy("date","asc")
        )
        const querySnapshot2 = await getDocs(q2)
        querySnapshot2.forEach((d) =>{
            flights_from_return.push({
                id:d.id,
                ...d.data()
            })
        })
    }

    flights_from_origin = flights_from_origin.map(fd => {
        let city_dp = citys.find(c=> c.id == fd.origen)
        let city_arr = citys.find(c=> c.id == fd.destino)
        fd.city_dp = city_dp
        fd.city_arr = city_arr
        return fd
    })

    flights_from_return = flights_from_return.map(fd => {
        let city_dp = citys.find(c=> c.id == fd.origen)
        let city_arr = citys.find(c=> c.id == fd.destino)
        fd.city_dp = city_dp
        fd.city_arr = city_arr
        return fd
    })
    console.log(flights_from_origin)
    console.log(flights_from_return)
    setTimeout(() => {
        dispatch(SEARCHING_FLIGHTS(false))
    }, 2500)
    setTimeout(() => {
        dispatch(SET_FLIGHTS_FROM_ORIGIN(flights_from_origin))
        dispatch(SET_FLIGHTS_FROM_DESTINATION(flights_from_return))
    }, 400)
}