import { css } from '@emotion/react';
import React from 'react';

import BadgeProduction from 'components/badge-production/badge-production';
import Header from 'components/header';

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
                <BadgeProduction />
            </div>
        </div>
    );
}
