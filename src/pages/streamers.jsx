import { css } from '@emotion/react';
import React from 'react';

import Header from 'components/header';
import Streamers from 'components/streamers/streamers';

export default function StreamersPage() {
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
                <Streamers />
            </div>
        </div>
    );
}
