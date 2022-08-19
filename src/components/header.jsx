import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useContext, useRef, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { useClickAway } from 'react-use';

import StreamerIcon from './streamer-icon';
import UserMenu from './user-menu';
import UserProfileImage from './user-profile-image';

import emptyProfileImageUrl from 'assets/empty-profile-image.png';
import logoImage from 'assets/logo-white.svg';
import streamer2Image from 'assets/mock/streamer/nokduro.png';
import streamer1Image from 'assets/mock/streamer/pung.jpeg';
import streamer0Image from 'assets/mock/streamer/wakgood.jpeg';
import { AuthorizationContext } from 'contexts/authorization-context';
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
            <Link
                to={link}
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
            </Link>
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

    const { token } = useContext(AuthorizationContext);
    const myInformation = useMyInformation();

    const [showingMenu, setShowingMenu] = useState(false);
    const menuRef = useRef();
    useClickAway(menuRef, () => {
        setShowingMenu(false);
    });

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
                    justify-content: flex-end;
                    padding-right: 20px;
                    background-color: ${theme.colors.primary1};
                `}
            >
                {myInformation !== null ? (
                    <div
                        // 사용자 정보
                        css={css`
                            grid-column: 3;
                            grid-row: 1;

                            display: flex;
                            flex-direction: row;
                        `}
                    >
                        <div
                            // 경험치(레벨)
                            css={css`
                                color: ${theme.colors.white};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 50px;
                                height: 50px;
                            `}
                        >
                            <CircularProgressbar
                                text="50"
                                value={40}
                                styles={buildStyles({
                                    textSize: '2rem',
                                    pathColor: theme.colors.white,
                                    textColor: theme.colors.white,
                                })}
                            />
                        </div>

                        <div
                            css={css`
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                margin: 0 10px;
                            `}
                        >
                            <div
                                // 닉네임
                                css={css`
                                    font-weight: bold;
                                    font-size: 1.4rem;
                                    color: ${theme.colors.white};
                                    text-align: right;
                                    align-self: flex-end;
                                `}
                            >
                                {myInformation.userName}
                            </div>
                            {/* <div
                                // 칭호
                                css={css`
                                    font-weight: bold;
                                    font-size: 1rem;
                                    color: ${theme.colors.white};
                                    text-align: right;
                                `}
                            >
                                칭호없음
                            </div> */}
                        </div>
                    </div>
                ) : token !== null ? (
                    <div>
                        <MoonLoader
                            size={20}
                            color="#ffffff"
                            css={css`
                                margin-right: 10px;
                            `}
                        />
                    </div>
                ) : undefined}

                <div
                    css={css`
                        position: relative;
                        font-size: 0;
                    `}
                >
                    <UserProfileImage
                        onClick={() => {
                            if (myInformation === null || token === null) {
                                if (typeof window !== 'undefined') {
                                    const loginPath =
                                        process.env.NODE_ENV === 'development'
                                            ? '/oauth/twitch-local'
                                            : '/oauth/twitch';
                                    window.location.href =
                                        createApiUrl(loginPath);
                                }
                            } else {
                                setShowingMenu(!showingMenu);
                            }
                        }}
                        image={
                            myInformation !== null
                                ? myInformation.profileImage
                                : emptyProfileImageUrl
                        }
                        size={50}
                    />
                    <div
                        css={css`
                            position: absolute;
                            bottom: 0;
                            right: 0;
                        `}
                    >
                        {showingMenu && (
                            <UserMenu
                                ref={menuRef}
                                css={css`
                                    position: absolute;
                                    top: 8px;
                                    right: 0;
                                    z-index: 100;
                                `}
                            />
                        )}
                    </div>
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
                    <HeaderLink link="/streamers">내 스트리머</HeaderLink>
                    <HeaderLink link="/badge-control">뱃지 관리</HeaderLink>
                </div>
            </div>
        </div>
    );
}
