/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeadTitle from './HeadTitle';
import Profile from './Profile';
import BackBtn from './BackBtn';
import Lamp from './Lamp';
import Bulb from './Bulb';
import LightsTitle from './LightsTitle';
import LightningSpace from './LightningSpace';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { LightContext } from '../../contexts/LightContext';
const Header = () => {
    const {bulbColor} = useContext(LightContext);
    const {onOff} = useContext(LightContext);
    const [room, setRoom] = useState();
    const [activeLights, setActiveLights] = useState();
    const location = useLocation();
    let roomLocation = location.pathname.split('/');
    roomLocation.shift();
	useEffect(() => {
        let isMounted = true;
		if (roomLocation[0] === "spacepanel") {
			axios(`http://192.168.8.100/api/Vc70VYcnv7TMmseZ2N5OWewX8HTxQkB7-7PvulJe/groups/${roomLocation[1]}`)
            .then((response) =>{
                if(isMounted){
                    setRoom(response.data)
                }
            })
            return () => {
                isMounted = false;
            }
        }
	}, [location]);
    useEffect(() => {
        let isMounted = true;
        if(room){
            Promise.all(room?.lights?.map((light) =>
                axios(`http://192.168.8.100/api/${process.env.REACT_APP_HUE_USER}/lights/${light}`)))
                .then((response)=> {
                    if(isMounted){
                        setActiveLights(response)
                    }
                })
                return () => {
                    isMounted = false;
                }
            }
    }, [room]);
    const headerWrap = css`
    margin-left: 1rem;
    display: flex;
    `
    const lightBtnWrap = css`
    margin: 1rem auto 2rem;
    display: flex;
	flex-direction: row;
	overflow-y: scroll;
	scrollbar-width: none;
    padding-right:1.5rem;
    `
    return room && location.pathname !== "/" ? (
        <>
            <div css={headerWrap}>
            <Link to="/">
                <BackBtn />
                </Link>
            <HeadTitle title={room.name} />
            <Lamp />
            <Bulb color={bulbColor} onOff={onOff} />
            </div>
            <LightsTitle lightsAmount={room.lights.length} />
            <div css={lightBtnWrap}>
            {!activeLights ? <h2>Loading</h2> : activeLights.map((light, index) => (
                    <>
                        <LightningSpace key={index} activeRoom={roomLocation[1]} activeLight={room.lights[index]} space={light.data.name} />
                    </>
                ))}
            </div>
        </>
     ) : <div css={headerWrap}>
            <HeadTitle title="Control Panel" />
            <Profile />
        </div>
      ;
}
export default Header;