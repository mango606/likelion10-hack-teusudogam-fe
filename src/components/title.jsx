import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

function Title({ children }) {
    const theme = useTheme();
    return (
        <h1
            css={css`
                color: ${theme.colors.white};
                margin-bottom: 20px;
                font-size: 2rem;
                font-weight: bold;
            `}
        >
            {children}
        </h1>
    );
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
