import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const RoomsContext = createContext();
const RoomsContextProvider = (props) => {
    const [rooms, setRooms] = useState()
    useEffect(() => {
        axios.get(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/groups`)
        .then((response) => {
            setRooms(response.data)
        })
    }, []);

    return (
    <RoomsContext.Provider value={{rooms}}>
        {props.children}
    </RoomsContext.Provider>
)}
export default RoomsContextProvider;