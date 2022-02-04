/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ScenesBtn from './ScenesBtn';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ScenesTools = () => {
    const location = useLocation();
    let spaceLocation = location.pathname.split('/');
    spaceLocation.shift();
    const [scenes, setScenes] = useState();
    useEffect(() => {
        let isMounted = true;
		if (spaceLocation[0] === "spacepanel") {
			axios(`http://192.168.8.100/api/Vc70VYcnv7TMmseZ2N5OWewX8HTxQkB7-7PvulJe/scenes/`)
            .then((response) =>{
                if(isMounted){
                    setScenes(response.data)
                }
            })
            return () => {
                isMounted = false;
            }
            }
	}, [location]);
    const scenesTool = css`
    display:grid;
    grid-template-columns:1fr 1fr;
    `
    return (
        <>
            <div css={scenesTool}>
                {!scenes ? <h2>Loading</h2> : Object.keys(scenes)?.map((scene, index) => (
                        <ScenesBtn key={index} scenes={scenes[scene].name} />
                ))}
            </div>
        </>
     );
}
export default ScenesTools;