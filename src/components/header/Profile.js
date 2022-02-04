/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import placeholder from '../../assets/placeholderprofile.jpeg'
const Profile = () => {
    const profileImg = css`
    border-radius:50%;
    border: solid white;
    width: 17%;
    position:absolute;
    top:0;
    right:0;
    margin:1.5rem;
    `
    return (
        <>
            <img src={placeholder} alt="Placeholder" css={profileImg} />
        </>
     );
}
export default Profile;