/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fonts } from '../themes/Styles';
const CatTitle = ({title}) => {
    const catTitle = css`
    font-size: 1.2rem;
    color:${fonts.navyBody};
    padding: 1rem;
    margin-bottom:0px;
    `
    return (
        <>
            <h1 css={catTitle}>{title}</h1>
        </>
     );
}
export default CatTitle;