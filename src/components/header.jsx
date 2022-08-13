import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import StreamerIcon from './streamer-icon';
import UserProfileImage from './user-profile-image';

import logoImage from 'assets/logo-white.svg';
import streamer2Image from 'assets/mock/streamer/nokduro.png';
import streamer1Image from 'assets/mock/streamer/pung.jpeg';
import streamer0Image from 'assets/mock/streamer/wakgood.jpeg';
import { useMyInformation } from 'contexts/my-information-context';
import createApiUrl from 'utils/create-api-url';

function HeaderLink({ link, children, onClick }) {
    const theme = useTheme();

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <a
                href={link}
                css={css`
                    font-size: 1.1rem;
                    font-weight: bold;

                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20px;
                `}
            >
                {children}
            </a>
            {onClick ? (
                <div
                    css={css`
                        position: absolute;
                        bottom: 1px;
                        left: 0;
                        width: 100%;
                        height: 8px;
                        background-color: ${theme.colors.white};
                    `}
                />
            ) : undefined}
        </div>
    );
}

HeaderLink.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.bool,
};

HeaderLink.defaultProps = {
    onClick: false,
};

export default function Header() {
    const theme = useTheme();

    const myInformation = useMyInformation();

    const streamers = [
        {
            name: '우왁굳',
            image: streamer0Image,
        },
        {
            name: '풍월량',
            image: streamer1Image,
        },
        {
            name: '녹두로',
            image: streamer2Image,
        },
    ];

    return (
        <div
            // 헤더 배경
            css={css`
                background-color: ${theme.colors.primary2};
                display: grid;
                grid-template-columns: 1fr 1000px 1fr;
                grid-template-rows: 80px 50px;
            `}
        >
            <div
                // 로고
                css={css`
                    grid-column: 1;
                    grid-row: 1;
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: ${theme.colors.white};
                `}
            >
                <img
                    src={logoImage}
                    alt="logo"
                    css={css`
                        height: 45px;
                    `}
                />
            </div>
            <div
                // 최애 스트리머 목록
                css={css`
                    grid-column: 2;
                    grid-row: 1;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    column-gap: 12px;
                    width: 1000px;

                    background-color: ${theme.colors.primary1};
                    border-bottom-left-radius: 8px;

                    padding: 0 16px;
                `}
            >
                {streamers.map((streamer) => (
                    <StreamerIcon
                        key={`streamer-${streamer.name}`}
                        name={streamer.name}
                        image={streamer.image}
                        size={50}
                    />
                ))}
            </div>
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: ${theme.colors.primary1};
                `}
            >
                <div
                    // 사용자 정보
                    css={css`
                        grid-column: 3;
                        grid-row: 1;

                        display: grid;
                        grid-template-columns: auto auto auto;
                        column-gap: 6px;
                        grid-template-rows: auto auto;
                    `}
                >
                    <div
                        // 경험치(레벨)
                        css={css`
                            grid-column: 1;
                            grid-row-start: 1;
                            grid-row-end: 3;
                            color: ${theme.colors.white};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 50px;
                            height: 50px;
                        `}
                    >
                        <CircularProgressbar
                            text="10"
                            styles={buildStyles({
                                textSize: '2rem',
                                pathColor: theme.colors.white,
                                textColor: theme.colors.white,
                            })}
                        />
                    </div>

                    <div
                        // 닉네임
                        css={css`
                            font-weight: bold;
                            font-size: 1.2rem;
                            color: ${theme.colors.white};
                            grid-column: 2;
                            grid-row: 1;
                            text-align: right;
                            align-self: flex-end;
                        `}
                    >
                        {myInformation !== undefined
                            ? myInformation.userName
                            : '로그인'}
                    </div>

                    <div
                        // 칭호
                        css={css`
                            font-weight: bold;
                            font-size: 1rem;
                            color: ${theme.colors.white};
                            grid-column: 2;
                            grid-row: 2;
                            text-align: right;
                        `}
                    >
                        김트수
                    </div>
                    <UserProfileImage
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                window.location.href = createApiUrl(
                                    '/oauth/twitch-local',
                                );
                            }
                        }}
                        css={css`
                            grid-column: 3;
                            grid-row-start: 1;
                            grid-row-end: 3;
                        `}
                        image={myInformation?.profileImage ?? ''}
                        size={50}
                    />
                </div>
            </div>
            <div
                // 내비게이션
                css={css`
                    grid-column: 2;
                    grid-row: 2;
                `}
            >
                <div
                    css={css`
                        width: 1000px;
                        height: 100%;

                        margin: 0 auto;
                        color: ${theme.colors.white};

                        display: flex;
                        flex-direction: row;
                    `}
                >
                    <HeaderLink link="/badges">전체 뱃지</HeaderLink>
                    <HeaderLink link="/badge-control">뱃지 관리</HeaderLink>
                </div>
            </div>
        </div>
    );
}
