import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function StreamerIcon({ name, size, image }) {
    const theme = useTheme();
    return (
        <div
            css={css`
                color: ${theme.colors.primary1};
                font-weight: bold;
                font-size: 1rem;
                border-radius: 50%;
                background-color: ${theme.colors.white};
                width: ${size}px;
                height: ${size}px;

                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            `}
        >
            <img
                src={image}
                alt={name}
                css={css`
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                `}
            />
        </div>
    );
}

StreamerIcon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    image: PropTypes.string,
};

StreamerIcon.defaultProps = {
    size: 50,
    image: null,
};
