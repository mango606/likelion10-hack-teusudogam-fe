import { css } from '@emotion/react';
import React from 'react';

import BadgeManagement from 'components/badge-management/badge-management';
import Header from 'components/header';

export default function BadgeManagementPage() {
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
