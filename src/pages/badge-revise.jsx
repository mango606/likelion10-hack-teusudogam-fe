import { css } from '@emotion/react';
import React from 'react';

import Header from 'components/header';
import BadgeRevise from 'components/badge-revise/BadgeRevise';

export default function Page4() {
    return (
        <div>
            <Header />
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin: 60px auto;
                `}
            >
                <BadgeRevise />
            </div>
        </div>
    );
}
