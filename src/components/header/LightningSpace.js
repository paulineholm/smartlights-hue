/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fonts, btnElm } from '../themes/Styles';
import { FaBed } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
const LightningSpace = ({space, activeLight, activeRoom}) => {
    const location = useLocation();
    let lightningSpace = location.pathname.split('/');
    lightningSpace.shift();
    const lightSpaceBtnLink = css`
    text-decoration:none;
    `
    const lightSpaceBtn = css`
    margin-left: 0.7rem;
    margin-top: 3rem;
    padding: 0.7rem;
    border-radius:10px;
    border: none;
    font-size:0.7rem;
    font-weight:bold;
    background: ${lightningSpace[2] === activeLight ? `${btnElm.activeBtn}` : `${btnElm.defaultBtn}`};
    color:${lightningSpace[2] === activeLight ? `${fonts.head}` : `${fonts.navyBody}`};
    display:flex;
    box-shadow:0px 0px 20px -4px rgba(200,200,200,0.8);
    `
    const lightSpaceIcon = css`
    color:${lightningSpace[2] === activeLight ? `${fonts.head}` : `${fonts.navyBody}`};
    font-size:1rem;
    margin-right:0.4rem;
    `
    const lightSpaceTitle = css`
    margin:0;
    `
    return (
        <>
            <Link to={`/spacepanel/${activeRoom}/${activeLight}`} css={lightSpaceBtnLink}>
                <button css={lightSpaceBtn}>
                    <FaBed css={lightSpaceIcon} />
                    <p css={lightSpaceTitle}>{space}</p>
                </button>
            </Link>
        </>
     );
}
export default LightningSpace;