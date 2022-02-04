/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ColorElm from "./ColorElm";
const ColorsTool = () => {
    const colorsToolWrap = css`
    margin: 0;
    `
    return (
        <>
            <ul css={colorsToolWrap}>
                <ColorElm color="salmonPink" />
                <ColorElm color="artGreen" />
                <ColorElm color="babyBlue" />
                <ColorElm color="easyPurple" />
                <ColorElm color="matteMagenta" />
                <ColorElm color="sandyYellow" />
                <ColorElm optionalValue="+" />
            </ul>
        </>
     );
}
export default ColorsTool;