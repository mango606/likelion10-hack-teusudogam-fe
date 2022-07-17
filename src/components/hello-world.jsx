import { css, useTheme } from '@emotion/react';
import React from 'react';

export default function HelloWorld() {
    const theme = useTheme();

    return (
        <div
            css={css`
                font-size: 2rem;
                font-weight: bold;
                color: ${theme.colors.white};
            `}
        >
            Hello, world!
        </div>
    );
}
