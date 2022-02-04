/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgColors } from '../themes/Styles';
import CatTitle from './CatTitle';
import BrightnessTool from './BrightnessTool';
import ColorsTool from './ColorsTool';
import ScenesTool from './ScenesTool';
import SwitchBtn from './SwitchBtn';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BodySpacePanel = () => {
    const location = useLocation();
    let spaceLocation = location.pathname.split('/');
    spaceLocation.shift();
    const [isOn, setIsOn] = useState();
    const [hue, setHue] = useState();
    const [sat, setSat] = useState();
    const [bri, setBri] = useState();
    useEffect(() => {
        let isMounted = true;
		if (spaceLocation[0] === "spacepanel") {
			axios(`http://192.168.8.100/api/Vc70VYcnv7TMmseZ2N5OWewX8HTxQkB7-7PvulJe/lights/${spaceLocation[2]}`)
            .then((response) =>{
                if(isMounted){
                    setIsOn(response.data.state.on)
                    setHue(response.data.state.hue)
                    setSat(response.data.state.sat)
                    setBri(response.data.state.bri)
                }
            })
            return () => {
                isMounted = false;
            }
            }
	}, [location]);
    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/lights/${spaceLocation[2]}/state`, {
        "on": isOn
        })
    }, [isOn]);
    useEffect(() => {
        axios.put(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/lights/${spaceLocation[2]}/state`, {
            "hue": hue,
            "bri": bri,
            "sat": sat,
        })
    }, [hue, bri, sat]);
    const switchOnOff = () => {
        setIsOn(!isOn)
    }
    const compoBodyWrap = css`
        background: ${bgColors.bodyBg};
        width: 100vw;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 1000vh;
        position:relative;
    `
    return (
        <>
        <div css={compoBodyWrap}>
            <SwitchBtn isOn={isOn} switchOnOff={switchOnOff} />
            <CatTitle title="Intensity" />
            <BrightnessTool bri={bri} setBri={setBri} />
            <CatTitle title="Colors" />
            <ColorsTool />
            <CatTitle title="Scenes" />
            <ScenesTool scenes="Scenes Elm" />
        </div>
        </>
     );
}
 
export default BodySpacePanel;