/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bulbColors } from '../themes/Styles';
import { useContext } from 'react';
import { LightContext } from '../../contexts/LightContext';
const ColorElm = ({color, optionalValue}) => {
    const {setBulbColor} = useContext(LightContext);
    const handleBulbColor = () => setBulbColor(color);
    const colorElm = css`
    border:none;
    border-radius:50%;
    width:1.7rem;
    height:1.7rem;
    margin-right:0.5rem;
    background: ${ color ? bulbColors[color] : `white`};
    `
    return (
        <button css={colorElm} onClick={handleBulbColor}>{optionalValue}</button>
     );
}
export default ColorElm;