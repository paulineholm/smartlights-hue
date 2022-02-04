/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bgColors, fonts } from '../themes/Styles';
import placeholder from '../../assets/placeholderspace.png'
import { Link } from 'react-router-dom';
const SpaceBox = ({roomTitle, lightsNr, roomName, lights}) => {
    const spaceBoxLink = css`
    text-decoration:none;
    `
    const spaceBoxWrap = css`
    border-radius: 15px;
    background: ${bgColors.spaceBoxBg};
    width: 40vw;
    height: 40vw;
    margin: 1rem auto;
    box-shadow:0px 0px 29px -4px rgba(200,200,200,0.4);
    `
    const spaceBoxImg = css`
    width: 50%;
    padding-top:0.5rem;
    padding-left:0.5rem;
    `
    const spaceBoxTitle = css`
    color:${fonts.blurryBlackBody};
    font-size:1rem;
    margin: 0.2rem 0.5rem;
    `
    const lightsNumber = css`
    color:${fonts.yellowLightsBody};
    font-size:0.7rem;
    margin: 0 0.6rem;
    `
    return (
        <>
            <Link to={`/spacepanel/${roomName}/${lights[0]}`} css={spaceBoxLink}>
            <div css={spaceBoxWrap}>
                <img css={spaceBoxImg} src={placeholder} alt="Placeholder space" />
                <h2 css={spaceBoxTitle}>{roomTitle}</h2>
                <h3 css={lightsNumber}>{lightsNr} Lights</h3>
            </div>
            </Link>
        </>
     );
}
export default SpaceBox;