import { css, useTheme } from '@emotion/react';
import React, { useState } from 'react';
import useSWR from 'swr';

import BadgeEvaluationBox from './badge-evaluation-box';

import Title from 'components/title';
import useFetcher from 'hooks/use-fetcher';

export default function BadgeForumBox() {
    const theme = useTheme();

    const badges = useSWR(
        '/badge/findAll',
        useFetcher({
            page: 1,
            size: 20,
        }),
    );

    const [currentBadge, setCurrentBadge] = useState(null);
    console.log(badges.data?.[0][0]);

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
                                setCurrentBadge(badge);
                            }}
                            key={`badge-${badge.id}`}
                            name={badge.name}
                            condition={badge.condition}
                            description={badge.desc}
                            image={badge.image}
                            like={badge.like}
                            dislike={badge.unlike}
                            comment={badge.comment}
                            enabled={
                                currentBadge !== null &&
                                badge.id === currentBadge.id
                            }
                        />
                    ))}
            </div>
        </div>
    );
}
