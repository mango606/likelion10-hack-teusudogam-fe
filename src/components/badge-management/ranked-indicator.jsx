import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function RankedIndicator({ isRanked }) {
    const theme = useTheme();
    return (
        <div
            css={css`
                display: flex;

                width: 100px;
                height: 25px;

                border-radius: 4px;

                font-size: 0, 9rem;
                color: ${theme.colors.white};
                align-items: center;
                justify-content: center;
                ${isRanked === true &&
                css`
                    background-color: green;
                `}
                ${isRanked === false &&
                css`
                    background-color: red;
                `}
            `}
        >
            {isRanked === true && 'Ranked'}
            {isRanked === false && 'Unranked'}
        </div>
    );
}

RankedIndicator.propTypes = {
    isRanked: PropTypes.bool.isRequired,
};
