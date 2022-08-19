import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function UserProfileImage({ image, size, className, onClick }) {
    return (
        <button
            type="button"
            className={className}
            css={css`
                width: ${size}px;
                height: ${size}px;
                border-radius: 6px;
                overflow: hidden;

                border: 0;
                background: 0;
                padding: 0;

                ${onClick !== undefined
                    ? css`
                          cursor: pointer;
                      `
                    : undefined}
            `}
            onClick={onClick}
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
        </button>
    );
}

UserProfileImage.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

UserProfileImage.defaultProps = {
    size: 50,
    className: undefined,
    onClick: undefined,
};
