import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import Badge from './Badge';

import tempBadgeImage from 'assets/mock/streamer/nokduro.png';

const Label = styled.div`
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    padding: 10px 0px 10px 10px;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    height: auto;
    font-size: 1.2rem;
    font-style: bold;
`;

const Badges = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    row-gap: 10px;
    width: 100%;
    flex-wrap: wrap;

    padding: 10px 10px;
`;

export default function BadgeBox() {
    const theme = useTheme();

    const badges = [
        {
            image: tempBadgeImage,
            badgeName: '뱃지1',
        },
        {
            image: tempBadgeImage,
            badgeName: '뱃지2',
        },
        {
            image: tempBadgeImage,
            badgeName: '뱃지3',
        },
        {
            image: tempBadgeImage,
            badgeName: '뱃지4',
        },
        {
            image: tempBadgeImage,
            badgeName: '뱃지5',
        },
    ];

    return (
        <div
            // 전체 컨테이너
            css={css`
                background-color: rgba(0, 0, 0, 0.2);

                width: 1200px;

                border-radius: 5%;

                display: grid;
                grid-template-columns: 10fr 7fr;
                grid-template-rows: auto auto;
            `}
        >
            <div
                // 이름
                css={css`
                    grid-row: 1;
                    grid-column-start: 1;
                    grid-column-end: 3;

                    display: flex;

                    align-items: center;

                    color: ${theme.colors.white};
                    background-color: ${theme.colors.primary3};
                    padding-bottom: 40px;
                    font-size: 2.5rem;
                    font-weight: bold;
                `}
            >
                전체 뱃지
            </div>
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
                            key={`badge-${badge.name}`}
                            badgeName={badge.badgeName}
                            image={badge.image}
                            size={100}
                        />
                    ))}

                    {badges.map((badge) => (
                        <Badge
                            key={`badge-${badge.name}`}
                            badgeName={badge.badgeName}
                            image={badge.image}
                            size={100}
                        />
                    ))}
                </Badges>
                <Label> 전체 뱃지</Label>
                <Badges>
                    {badges.map((badge) => (
                        <Badge
                            key={`badge-${badge.name}`}
                            badgeName={badge.badgeName}
                            image={badge.image}
                            size={100}
                        />
                    ))}

                    {badges.map((badge) => (
                        <Badge
                            key={`badge-${badge.name}`}
                            badgeName={badge.badgeName}
                            image={badge.image}
                            size={100}
                        />
                    ))}
                </Badges>
            </div>
            <div
                // 큰 뱃지 박스 (우측)
                css={css`
                    background-color: rgba(0, 0, 0, 0.3);
                    grid-row: 2;
                    grid-column: 2;

                    display: flex;
                    flex-direction: column;
                    //justify-content: center;
                    align-items: center;

                    border-radius: 3%;
                    margin: 10px 0px 10px 10px;
                    padding: 0 auto;
                    width: 95%;
                    height: auto;
                `}
            >
                <div
                    css={css`
                        background-color: white;
                        margin: 20px 20px 20px 20px;
                        width: auto;
                        height: auto;

                        border-radius: 10%;
                    `}
                >
                    <Badge
                        image={tempBadgeImage}
                        size={400}
                        badgeName="BigBadge"
                    />
                </div>
                <div
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 2rem;
                        font-weight: bold;

                        width: 80%;
                        text-align: left;
                    `}
                >
                    춘천사는 99세 녹두로
                </div>
                <div
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1.3rem;

                        margin-top: 15px;
                        width: 80%;
                        text-align: left;
                    `}
                >
                    로렘입숨 녹두로의 기강잡기
                </div>
            </div>
        </div>
    );
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
};
