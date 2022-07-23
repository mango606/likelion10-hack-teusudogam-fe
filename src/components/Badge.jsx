import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function Badge({ image, size, badgeName }) {
    const theme = useTheme();

    return (
        <div
            css={css`
                color: ${theme.colors.primary1};
                background-color: ${theme.colors.white};
                border-radius: 10px;
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
                alt={badgeName}
                css={css`
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                `}
            />
        </div>
    );
}

Badge.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.number,
    badgeName: PropTypes.string,
};

Badge.defaultProps = {
    size: 50,
    badgeName: 'Default Badge',
};
