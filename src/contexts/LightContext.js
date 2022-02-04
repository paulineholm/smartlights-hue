import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import convert from 'color-convert';
import { bulbColors } from '../components/themes/Styles';
import { useLocation } from 'react-router-dom';
export const LightContext = createContext();
const LightContextProvider = ({children}) => {
    const location = useLocation();
    let lightLocation = location.pathname.split('/');
    lightLocation.shift();
    const [bulbColor, setBulbColor] = useState();
    const [convertedBulbColor, setConvertedBulbColor] = useState();
    const [bulbHue, setBulbHue] = useState();
    const [bulbSat, setBulbSat] = useState();
    const [bulbBri, setBulbBri] = useState();
    const [onOff, setOnOff] = useState();
    useEffect(() => {
        setConvertedBulbColor(convert.hex.hsv(bulbColors[bulbColor]))
    }, [bulbColor]);
    useEffect(() => {
        if(convertedBulbColor){
            axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/lights/${lightLocation[2]}/state`, {
            "hue": convertedBulbColor[0] * 182,
            "bri": Math.floor(convertedBulbColor[1] * 2.54),
            "sat": Math.floor(convertedBulbColor[2] *2.54),
        })}
    }, [convertedBulbColor]);
    useEffect(() => {
        if(lightLocation[0] === "spacepanel"){
            axios.get(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/lights/${lightLocation[2]}`)
        .then((response) => {
            setBulbHue(response.data.state.hue);
            setBulbSat(response.data.state.sat);
            setBulbBri(response.data.state.bri);
            setOnOff(response.data.state.on)
        })
        }
    }, [location]);
    useEffect(() => {
        if(bulbHue !== undefined && bulbSat !== undefined && bulbBri !== undefined){
            let bridgeBulbColor = convert.hsv.hex(
                bulbHue /182,
                Math.floor(bulbSat / 2.54),
                Math.floor(bulbBri / 2.54)
            );
            setBulbColor(`#${bridgeBulbColor}`)
        }
    }, [bulbHue, bulbSat, bulbBri, onOff]);
    return (
    <LightContext.Provider value={{bulbColor, setBulbColor, setOnOff, onOff}}>
        {children}
    </LightContext.Provider>
)}
export default LightContextProvider;