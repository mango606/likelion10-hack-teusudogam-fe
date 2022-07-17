import { css } from '@emotion/react';
import React from 'react';

import Header from 'components/header';
import HelloWorld from 'components/hello-world';

export default function MainPage() {
    return (
        <div>
            <Header />
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 200px;
                `}
            >
                <HelloWorld />
            </div>
        </div>
    );
}
