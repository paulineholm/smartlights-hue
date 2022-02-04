/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fonts } from '../themes/Styles';

const HeadTitle = ({title}) => {
    const headTitle = css`
        font-size: 1.7rem;
        color: ${fonts.head};
        width: 50%;
    `
    return (
            <h3 css={headTitle}>{title}</h3>
     );
}
export default HeadTitle;