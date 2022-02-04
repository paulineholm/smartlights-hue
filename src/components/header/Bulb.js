/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bulbColors } from '../themes/Styles';
const Bulb = ({color, onOff}) => {
    const bulbElm = css`
    border:none;
    border-radius:50%;
    width:1.5rem;
    height:1.5rem;
    margin-right:0.5rem;
    background: ${Object.keys(bulbColors).includes(color) ? bulbColors[color] : color};
    position:fixed;
    top:17.5vh;
    right:15vw;
    display:${onOff ? "inline" : "none"};
    `
    console.log(onOff)
    return (
        <span css={bulbElm}></span>
     );
}
export default Bulb;