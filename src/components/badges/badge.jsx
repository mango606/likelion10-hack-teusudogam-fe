import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function Badge({ onClick, image, size, badgeName }) {
    const theme = useTheme();

    return (
        <button
            type="button"
            onClick={onClick}
            css={css`
                ${size !== undefined &&
                css`
                    width: ${size}px;
                    height: ${size}px;
                `}

                color: ${theme.colors.primary1};
                background-color: ${theme.colors.white};
                padding: 0;
                border: 0;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;

                ${onClick !== undefined &&
                css`
                    cursor: pointer;

                    :hover {
                        opacity: 0.8;
                    }
                `}
            `}
        >
            <img
                src={image}
                alt={badgeName}
                css={css`
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                `}
            />
        </button>
    );
}

Badge.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    badgeName: PropTypes.string,
    onClick: PropTypes.func,
};

Badge.defaultProps = {
    size: undefined,
    badgeName: 'Default Badge',
    onClick: undefined,
};
