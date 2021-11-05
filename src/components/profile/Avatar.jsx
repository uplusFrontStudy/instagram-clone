import React from 'react';
import defaultImage from '../../images/profile_default_image.png';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';

const AvatarBlock = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};

    & > img {
        width: 100%;
        height: 100%;
        border: 1px solid ${palette.gray[6]};
        border-radius: 50%;
        cursor: pointer;

    }
`;

const Avatar = ({ profileURL, size }) => {
    
    return (
        <AvatarBlock size={size}>
            <img src={profileURL || defaultImage} alt="프로필 이미지"/>   
        </AvatarBlock>
    )};

export default Avatar;