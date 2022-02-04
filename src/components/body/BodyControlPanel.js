/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CatTitle from './CatTitle';
import SpaceBox from './SpaceBox';
import { bgColors } from '../themes/Styles';
import { useContext } from "react";
import { RoomsContext } from "../../contexts/RoomsContext";

const BodyControlPanel = () => {
    const {rooms} = useContext(RoomsContext);
    const compoBodyWrap = css`
        background: ${bgColors.bodyBg};
        width: 100vw;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 1000vh;
    `
    const gridBodyWrap = css`
        display: grid;
        grid-template-columns:1fr 1fr;
    `
    return (
        <>
        <div css={compoBodyWrap}>
            <CatTitle title="All Rooms" />
            <div css={gridBodyWrap}>
                {!rooms ? <h2>Loading</h2> : Object.keys(rooms)?.map(roomId => (
                    <SpaceBox roomName={[roomId]} key={rooms[roomId].name} roomTitle={rooms[roomId].name} lightsNr={rooms[roomId].lights.length} lights={rooms[roomId].lights} />
                ))}
            </div>
        </div>
        </>
     );
}
export default BodyControlPanel;