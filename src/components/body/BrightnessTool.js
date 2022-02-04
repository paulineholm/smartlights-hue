/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import { visualElm } from '../themes/Styles';
const BrightnessTool = ({bri, setBri}) => {
    const [briValue] = useState(bri);
    const handleBri = e => setBri(Number(e.target.value));
    const brightnessToolWrap = css`
    display:flex;
    `
    const bulbIcon = css`
    color:${visualElm.brightnessToolElm};
    font-size:1.5rem;
    padding:0.2rem 0.5rem;
    width: 10%;
    `
    const sliderWrap = css`
    width: 75%;
    margin: 0rem auto;
    `
    return (
        <>
            <div css={brightnessToolWrap}>
                <HiLightBulb css={bulbIcon} />
                <div css={sliderWrap}>
                    <Slider
                    aria-label='Temperature'
                    valueLabelDisplay='auto'
                    step={1}
                    marks
                    min={0}
                    max={254}
                    value={briValue}
                    onChange={handleBri}
                    sx={{
                        color: `${visualElm.brightnessToolElm}`,
                    }}
                    />
                </div>
                <HiOutlineLightBulb css={bulbIcon} />
            </div>
        </>
     );
}
 
export default BrightnessTool;