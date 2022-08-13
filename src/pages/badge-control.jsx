import { css, useTheme } from '@emotion/react';
import React from 'react';

import BadgeControlBox from 'components/badges/badge-control-box';
import DefaultLayout from 'layouts/default';

export default function BadgesPage() {
    const theme = useTheme();
    return (
        <DefaultLayout>
            <h1
                css={css`
                    grid-column-start: 1;
                    grid-column-end: 4;
                    grid-row: 1;

                    margin-bottom: 40px;

                    color: ${theme.colors.white};
                `}
            >
                뱃지 관리
            </h1>
            <BadgeControlBox />
        </DefaultLayout>
    );
}
