/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fonts } from '../themes/Styles';
const LightsTitle = ({lightsAmount}) => {
    const lightsTitle = css`
    color:${fonts.headLights};
    margin-left: 1.5rem;
    font-size:1.1rem;
    position:absolute;
    top:6.5rem;
    `
    return (
        <>
            <h2 css={lightsTitle}>{lightsAmount} lights</h2>
        </>
     );
}
export default LightsTitle;