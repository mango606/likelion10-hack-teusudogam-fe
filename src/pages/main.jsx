import { css } from '@emotion/react';
import React from 'react';

import BadgeBox from 'components/BadgeBox';
import Header from 'components/header';

export default function MainPage() {
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
                <BadgeBox />
            </div>
        </div>
    );
}
