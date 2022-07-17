import { css } from '@emotion/react';
import React from 'react';

export default function HelloWorld() {
    return (
        <div
            css={css`
                font-size: 2rem;
                font-weight: bold;
            `}
        >
            Hello, world!
        </div>
    );
}
