/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ImSwitch } from 'react-icons/im'
const SwitchBtn = ({isOn, switchOnOff}) => {

    const switchWrap = css`
    color:#FF9696;
    background:white;
    border-radius:50%;
    border:none;
    padding:0.3rem 0.4rem;
    box-shadow:0px 0px 29px -4px rgba(200,200,200,0.9);
    position:absolute;
    right:1rem;
    top:-1rem;
    `
    const switchIcon = css`
    font-size:1rem;
    color:${isOn ? "#FF9696" : "red"};
    `
    return (
        <>
            <button css={switchWrap} onClick={switchOnOff}>
                <ImSwitch css={switchIcon} />
            </button>
        </>
     );
}
export default SwitchBtn;