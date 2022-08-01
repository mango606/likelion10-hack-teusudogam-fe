import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Badge from './badge';

import tempBadgeImage from 'assets/mock/streamer/nokduro.png';
import Title from 'components/title';

const Label = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    border-radius: 8px;
    height: auto;
    font-size: 1.2rem;
    font-style: bold;
    padding: 10px 20px;
    margin-bottom: 16px;

    &:not(:first-child) {
        margin-top: 16px;
    }
`;

const Badges = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    row-gap: 16px;
`;

export default function BadgeBox() {
    const theme = useTheme();

    const badges = [
        {
            image: tempBadgeImage,
            name: '뱃지1',
            description: '뱃지 설명입니다',
        },
        {
            image: tempBadgeImage,
            name: '뱃지2',
            description: '로렘입숨',
        },
        {
            image: tempBadgeImage,
            name: '뱃지3',
            description: '으어',
        },
        {
            image: tempBadgeImage,
            name: '뱃지4',
            description: '테테스트',
        },
        {
            image: tempBadgeImage,
            name: '뱃지5',
            description: '테테테스트',
        },
    ];

    const [currentBadge, setCurrentBadge] = useState(null);

    return (
        <div>
            <Title>전체 뱃지</Title>

            <div
                // 전체 컨테이너
                css={css`
                    background-color: rgba(0, 0, 0, 0.3);

                    width: 1000px;

                    border-radius: 8px;

                    display: grid;
                    grid-template-columns: 1fr auto;
                    grid-template-rows: auto auto;

                    column-gap: 24px;
                    padding: 24px;
                `}
            >
                <div
                    // 뱃지 리스트(좌측)
                    css={css`
                        grid-row: 2;
                        grid-column: 1;
                        height: auto;
                    `}
                >
                    <Label>최근 획득한 뱃지</Label>
                    <Badges>
                        {badges.map((badge) => (
                            <Badge
                                onClick={() => {
                                    setCurrentBadge(badge);
                                }}
                                key={`badge-${badge.name}`}
                                badgeName={badge.name}
                                image={badge.image}
                            />
                        ))}
                    </Badges>
                    <Label> 전체 뱃지</Label>
                    <Badges>
                        {badges.map((badge) => (
                            <Badge
                                onClick={() => {
                                    setCurrentBadge(badge);
                                }}
                                key={`badge-${badge.name}`}
                                badgeName={badge.badgeName}
                                image={badge.image}
                            />
                        ))}
                    </Badges>
                </div>
                <div
                    // 큰 뱃지 박스 (우측)
                    css={css`
                        background-color: rgba(0, 0, 0, 0.25);
                        grid-row: 2;
                        grid-column: 2;

                        border-radius: 8px;
                        padding: 32px;
                    `}
                >
                    <div
                        css={css`
                            background-color: white;
                            width: auto;
                            height: auto;

                            border-radius: 8px;
                        `}
                    >
                        {currentBadge !== null ? (
                            <Badge
                                image={tempBadgeImage}
                                size={400}
                                badgeName="BigBadge"
                            />
                        ) : (
                            <div
                                css={css`
                                    width: 400px;
                                `}
                            />
                        )}
                    </div>
                    <div
                        css={css`
                            color: ${theme.colors.white};
                            font-size: 2rem;
                            font-weight: bold;

                            margin-top: 20px;
                        `}
                    >
                        {currentBadge?.name ?? ''}
                    </div>
                    <div
                        css={css`
                            color: ${theme.colors.white};
                            font-size: 1.2rem;
                            margin-top: 10px;
                        `}
                    >
                        {currentBadge?.description ?? ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
};
