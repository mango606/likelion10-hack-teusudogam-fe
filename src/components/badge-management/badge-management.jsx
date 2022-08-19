import { css, useTheme } from '@emotion/react';
import React, { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';

import ManagementBox from './management-box';

import Glass from 'assets/mock/management/glass.png';
import Title from 'components/title';
import useAxios from 'hooks/use-axios';
import useFetcher from 'hooks/use-fetcher';

export default function BadgeManagement() {
    const theme = useTheme();
    const [searchType, setSearchType] = useState();
    const totalBadges = 0;
    const [checkedIds, setCheckedIds] = useState([]);
    const axios = useAxios();

    const toggle = useCallback(
        (data) => {
            if (checkedIds.includes(data.id)) {
                setCheckedIds(
                    checkedIds.filter((element) => {
                        return element !== data.id;
                    }),
                );
            } else {
                setCheckedIds([...checkedIds, data.id]);
            }
        },
        [checkedIds],
    );

    const infomations = useSWR(
        '/badge/findAll-created',
        useFetcher({
            page: 0,
            size: 20,
        }),
    );

    console.log(infomations.data?.[0][0]);

    const spanStyle = useMemo(
        () => css`
            padding: 4px;
        `,
        [],
    );

    return (
        <div
            // 전체 컨테이너 박스
            css={css`
                width: 1000px;
                height: 100%;

                margin: 0 auto;
                display: flex;
                flex-direction: column;
            `}
        >
            <Title>뱃지 수정/삭제</Title>
            <div
                // 뱃지 검색 박스
                css={css`
                    background-color: rgba(32, 29, 43, 1);

                    grid-row: 2;
                    grid-column: 1;

                    justify-content: center;
                    align-items: center;

                    border-radius: 10px;
                    margin: 2% 0;
                    padding: 20px 40px;

                    width: 1000px;
                    height: auto;
                `}
            >
                <div
                    // 폰트
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1rem;
                        font-weight: bold;

                        text-align: left;
                    `}
                >
                    <label htmlFor="search-input">
                        뱃지 검색
                        <input
                            id="search-input"
                            type="text"
                            placeholder=" 뱃지 이름 또는 태그 입력"
                            onChange={(event) => {}}
                            css={css`
                                /* 뱃지 이름 또는 태그 입력 */
                                background-color: rgba(22, 20, 30, 1);
                                border: none;
                                color: white;
                                width: 32%;
                                height: 10%;
                                border-radius: 10px;
                                margin: 0 0 0 4%;
                            `}
                        />
                    </label>
                    <button
                        type="button"
                        css={css`
                            /* 돋보기 버튼 */
                            background-color: transparent;
                            border: none;
                            width: 5%;
                            height: 10%;

                            position: relative;
                            right: 5%;
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
                            width: 12%;
                            height: 10%;
                            border-radius: 10px;

                            position: relative;
                            right: 3%;
                        `}
                    >
                        <option value="검색 조건" disabled>
                            검색 조건
                        </option>
                        <option value="뱃지 이름">뱃지 이름</option>
                        <option value="태그">태그</option>
                        <option value="랭크 여부">랭크 여부</option>
                    </select>
                </div>
            </div>

            <div
                // 중간 분리선
                css={css`
                    display: flex;
                    margin-top: 10px;
                `}
            >
                <span
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 15px;
                        align-self: flex-end;
                    `}
                >
                    총 뱃지 수
                    <span
                        css={css`
                            color: ${theme.colors.primary1};
                            text-align: right;
                        `}
                    >
                        {' '}
                        {totalBadges}
                    </span>
                    개
                </span>

                <button
                    type="button"
                    css={css`
                        /* 뱃지 수정, 삭제 버튼 */
                        background-color: ${theme.colors.primary1};
                        border: none;
                        color: ${theme.colors.white};
                        padding: 10px 28px;
                        text-align: center;
                        font-size: 15px;
                        margin: 0px;
                        margin-left: auto;
                        margin-right: 10px;
                        border-radius: 10px;
                    `}
                >
                    뱃지 수정
                </button>
                <button
                    type="button"
                    onClick={() => {
                        console.log('Del button Clicked');
                        axios.delete(`https://api.teusubox.shop/badge/1`);
                    }}
                    css={css`
                        /* 뱃지 수정, 삭제 버튼 */
                        background-color: ${theme.colors.primary1};
                        border: none;
                        color: ${theme.colors.white};
                        padding: 10px 28px;
                        text-align: center;
                        font-size: 15px;

                        border-radius: 10px;
                    `}
                >
                    뱃지 삭제
                </button>
            </div>

            <hr
                css={css`
                    margin: 10px 0px 20px 0px;
                `}
            />

            <div>
                <ol
                    css={css`
                        display: grid;
                        grid-template-columns: 5% 10% 20% 15% 25% 20%;

                        justify-content: stretch;
                        text-align: center;
                        list-style-type: none;

                        background-color: rgba(32, 29, 43, 1);
                        border-radius: 10px;
                        margin: 1% 0;
                        padding: 1% 50px;
                        width: 1000px;
                        height: auto;
                        color: white;
                        font-size: 15px;
                    `}
                >
                    <input type="checkbox" />
                    <span css={spanStyle}>이미지</span>
                    <span css={spanStyle}>뱃지 이름</span>
                    <span css={spanStyle}> 태그</span>
                    <span css={spanStyle}>달성 조건</span>
                    <span css={spanStyle}>랭크 여부</span>
                </ol>
            </div>
            <div
                // ManagementBox Container
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    margin: 0 auto;
                `}
            >
                {infomations.data?.[0] &&
                    infomations.data[0].map((data) => (
                        <ManagementBox
                            onClick={() => {
                                toggle(data);
                            }}
                            key={`management-box-${data.id}`}
                            data={data}
                        />
                    ))}
            </div>
        </div>
    );
}
