import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function Badge({ onClick, badge, size }) {
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
                background: none;
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

                @keyframes rotate {
                    0% {
                        transform: rotateY(0deg);
                    }
                    100% {
                        transform: rotateY(360deg);
                    }
                }

                :hover img {
                    animation-name: rotate;
                    animation-duration: 1s;
                }
            `}
        >
            <img
                src={badge.image.url}
                alt={badge.name}
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
    size: PropTypes.number,
    onClick: PropTypes.func,
    badge: PropTypes.object.isRequired,
};

Badge.defaultProps = {
    size: undefined,
    onClick: undefined,
};
