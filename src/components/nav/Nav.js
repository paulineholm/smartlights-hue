/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BiBulb, BiHomeAlt, BiBrightness } from "react-icons/bi";
import { elmColors, bgColors } from '../themes/Styles';
import { Link } from 'react-router-dom';
const Nav = () => {
    const navWrap = css`
        background-color: ${bgColors.navBg};
		text-align: center;
		padding: 0;
		margin: auto 0;
        bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
        box-shadow:0px 0px 29px -4px rgba(200,200,200,0.4);
    `
    const icon = css`
        font-size: 2.2rem;
        width: 18vw;
		margin: 2vh 3vw;
		cursor: grab;
        color: ${elmColors.navIconColor};
    `
    return (
        <>
            <ul css={navWrap}>
                <Link to="#">
                    <BiBulb css={icon} />
                </Link>
                <Link to="/">
                    <BiHomeAlt css={icon} />
                </Link>
                <Link to="/spacepanel/bedroom">
                    <BiBrightness css={icon} />
                </Link>
            </ul>
        </>
     );
}
export default Nav;