/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Lamp = () => {
    const lampElm = css`
    position:relative;
    z-index:200;
    `
    return (
        <div css={lampElm}>
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="157" viewBox="0 0 139 157">
            <g id="Group_39" data-name="Group 39" transform="translate(-199 6)">
            <g id="Group_38" data-name="Group 38">
            <path id="Path_100" data-name="Path 100" d="M30.334,1.617h79.054c3.314,0,4.206,2.324,6,6L139,62a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6L24.334,7.617C25.837,4.237,27.02,1.617,30.334,1.617Z" transform="translate(199 83)" fill="#fff"/>
            <rect id="Rectangle_13" data-name="Rectangle 13" width="5" height="102" transform="translate(266 -6)" fill="#fff"/>
            <rect id="Rectangle_14" data-name="Rectangle 14" width="4" height="58" rx="2" transform="matrix(0.921, -0.391, 0.391, 0.921, 298.828, 90.087)" fill="#568bd0" opacity="0.151"/>
            </g>
            </g>
            </svg>
        </div>
     );
}
export default Lamp;