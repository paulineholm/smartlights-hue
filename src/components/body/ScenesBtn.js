/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { GiLightBulb } from 'react-icons/gi'
const ScenesBtn = ({scenes}) => {
    const scenesBtn = css`
    margin:0.2rem auto;
    padding: 0.8rem;
    border-radius:10px;
    border: none;
    font-size:0.7rem;
    font-weight:bold;
    background:#A693EB;
    color:white;
    display:flex;
    width:7.5rem;
    `
    const scenesBulbIcon = css`
    color:white;
    font-size:1rem;
    margin-right:0.4rem;
    `
    const scenesTitle = css`
    margin:0.1rem;
    text-transform:capitalize;
    `
    return (
        <>
            <button css={scenesBtn}>
                <GiLightBulb css={scenesBulbIcon} />
                <p css={scenesTitle}>{scenes}</p>
            </button>
        </>
     );
}
export default ScenesBtn;