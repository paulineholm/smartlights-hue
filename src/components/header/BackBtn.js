/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BiArrowBack } from "react-icons/bi";

const BackBtn = () => {
    const icon = css`
    color:white;
    margin-top:2.3rem;
    padding-right:0.5rem;
    `
    return (
        <>
            <BiArrowBack css={icon} />
        </>
     );
}
export default BackBtn;