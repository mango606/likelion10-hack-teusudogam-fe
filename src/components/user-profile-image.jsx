import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function UserProfileImage({ image, size, className }) {
    return (
        <div
            className={className}
            css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 8px;
                overflow: hidden;
            `}
        >
            <img
                src={image}
                alt="user profile"
                css={css`
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                `}
            />
        </div>
    );
}

UserProfileImage.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
};

UserProfileImage.defaultProps = {
    size: 50,
    className: undefined,
};
