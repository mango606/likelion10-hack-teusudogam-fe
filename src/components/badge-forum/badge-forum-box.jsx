import { css, useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import useSWR from 'swr';

import BadgeEvaluationBox from './badge-evaluation-box';

import Title from 'components/title';
import useFetcher from 'hooks/use-fetcher';

export default function BadgeForumBox() {
    const theme = useTheme();

    const badges = useSWR(
        '/badge/findAll',
        useFetcher({
            page: 0,
            size: 20,
        }),
    );

    const [enabledBadgeIds, setEnabledBadgeIds] = useState([]);

    const toggleBadge = useCallback(
        (badge) => {
            // 켜져있으면 끄고
            if (enabledBadgeIds.includes(badge.id)) {
                setEnabledBadgeIds(
                    enabledBadgeIds.filter((element) => {
                        return element !== badge.id;
                    }),
                );
            } else {
                // 꺼져있으면 키고
                setEnabledBadgeIds([...enabledBadgeIds, badge.id]);
            }
        },
        [enabledBadgeIds],
    );

    // console.log(badges.data?.[0][0]);

    return (
        <div>
            <Title>뱃지 게시판</Title>

            <div
                // 게시글 전체 컨테이너
                css={css`
                    background-color: rgba(0, 0, 0, 0.2);

                    width: 1000px;
                    height: auto;

                    color: ${theme.colors.white};
                    border-radius: 8px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    row-gap: 16px;

                    padding: 16px;

                    margin: 0 auto;
                `}
            >
                {badges.data?.[0] &&
                    badges.data[0].map((badge) => (
                        <BadgeEvaluationBox
                            onClick={() => {
                                toggleBadge(badge);
                            }}
                            key={`badge-${badge.id}`}
                            badge={badge}
                            enabled={enabledBadgeIds.includes(badge.id)}
                        />
                    ))}
            </div>
        </div>
    );
}
