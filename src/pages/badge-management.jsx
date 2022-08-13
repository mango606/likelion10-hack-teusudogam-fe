import { css } from '@emotion/react';
import React from 'react';

import Header from 'components/header';
import BadgeManagement from 'components/badge-management/BadgeManagement';

export default function Page3() {
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
                <BadgeManagement />
            </div>
        </div>
    );
}
