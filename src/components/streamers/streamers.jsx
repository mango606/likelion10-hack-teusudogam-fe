import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import StreamerBox from './streamer-box';

import Glass from 'assets/mock/management/glass.png';
import Title from 'components/title';
import useAxios from 'hooks/use-axios';

const styleInfo = {
    padding: '5px',
    margin: '0 -20px',
};

const Label = styled.div`
    display: grid;
    list-style-type: none;
    background-color: rgba(32, 29, 43, 1);
    text-align: left;
    border-radius: 10px;
    padding: 10px 35px;
    margin: 10px 0;
    width: 230px;
    height: 230px;
    color: white;
    font-size: 10px;
`;

export default function BadgeManagement() {
    const theme = useTheme();
    const [searchType, setSearchType] = useState();
    const [myStreamers, setMyStreamers] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        axios.get('https://api.teusubox.shop/user').then((response) => {
            setMyStreamers(response.data.follows);
        });
    }, [axios]);

    console.log(myStreamers);

    return (
        <div
            // 전체 컨테이너 박스
            css={css`
                width: 1000px;
                height: 100%;

                display: grid;
            `}
        >
            <Title>내 스트리머</Title>
            <div
                // 뱃지 검색 박스
                css={css`
                    background-color: rgba(32, 29, 43, 1);

                    grid-row: 2;
                    grid-column: 1;

                    justify-content: center;

                    border-radius: 10px;
                    margin: 20px 0 10px 0;
                    padding: 5px 50px 50px 20px;

                    width: 1000px;
                    height: 30px;
                `}
            >
                <div
                    // 폰트
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 20px;
                        font-weight: bold;

                        text-align: left;
                    `}
                >
                    <label htmlFor="search-input">
                        스트리머 검색
                        <input
                            id="search-input"
                            type="text"
                            placeholder=" 스트리머 이름 입력"
                            onChange={(event) => {}}
                            css={css`
                                /* 스트리머 이름 입력 */
                                background-color: rgba(22, 20, 30, 1);
                                border: none;
                                color: white;
                                width: 270px;
                                height: 30px;
                                border-radius: 10px;
                                margin: 0 0 0 40px;
                            `}
                        />
                    </label>
                    <button
                        type="button"
                        css={css`
                            /* 돋보기 버튼 */
                            background-color: transparent;
                            border: none;
                            width: 50px;
                            height: 50px;

                            position: relative;
                            right: 40px;
                        `}
                    >
                        <img
                            src={Glass}
                            alt="Search"
                            style={{ maxWidth: '50%' }}
                        />
                    </button>
                    <select
                        value={searchType}
                        onChange={(event) => {
                            setSearchType(event.value);
                        }}
                        css={css`
                            /* 검색 조건 선택 */
                            background-color: rgba(22, 20, 30, 1);
                            border: none;
                            color: white;
                            width: 160px;
                            height: 30px;
                            border-radius: 10px;

                            position: relative;
                            right: 20px;
                        `}
                    >
                        <option value="검색 조건" disabled>
                            정렬 조건
                        </option>
                        <option value="트위치랭킹순">트위치랭킹순</option>
                        <option value="팔로우순">팔로우순</option>
                        <option value="인기순">하트순</option>
                    </select>
                </div>
            </div>
            <div
                css={css`
                    width: 1000px;
                    height: auto;

                    display: grid;
                    grid-template-columns: auto auto auto auto;
                `}
            >
                {myStreamers.map((data) => (
                    <StreamerBox data={data} />
                ))}
            </div>
        </div>
    );
}
