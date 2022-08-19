import { css, useTheme } from '@emotion/react';
import React, { useMemo, useState } from 'react';

import ManagementBox from './management-box';

import Glass from 'assets/mock/management/glass.png';
import tempImage from 'assets/mock/management/wakdu1.png';
import Title from 'components/title';

// const items = () => {
//     return (
//         <div>
//             <ol
//                 css={css`
//                     display: grid;
//                     grid-template-columns: 5% 10% 20% 15% 25% 20%;
//                     justify-content: stretch;

//                     list-style-type: none;

//                     background-color: rgba(32, 29, 43, 1);

//                     text-align: center;

//                     border-radius: 10px;
//                     margin: 1% 0;
//                     padding: 1% 50px;
//                     width: 1000px;
//                     height: auto;
//                     color: white;
//                     font-size: 15px;
//                 `}
//             >
//                 <input type="checkbox" width="15px" height="15px" />
//                 <span style={styleInfo}>
//                     <img src={data.route} alt="" style={{ maxWidth: '80px' }} />
//                 </span>
//                 <span style={styleInfo}>{data.name}</span>
//                 <span style={styleInfo}>{data.tag}</span>
//                 <span style={styleInfo}>{data.condition}</span>
//                 <span style={styleInfo}>{data.rank}</span>
//             </ol>
//         </div>
//     );
// });

export default function BadgeManagement() {
    const theme = useTheme();
    const [searchType, setSearchType] = useState();
    const totalBadges = 0;

    const testInformation = [
        {
            id: 1,
            image: tempImage,
            name: '웃는 왁두',
            tag: '#우왁굳',
            condition: '우왁굳 방송 1시간 이상 시청',
            rank: true,
        },
        {
            id: 2,
            image: tempImage,
            name: '우쭐대는 왁두',
            tag: '#우왁굳',
            condition: '우왁굳 방송 2시간 이상 시청',
            rank: false,
        },
        {
            id: 3,
            image: tempImage,
            name: '정색하는 왁두',
            tag: '#우왁굳',
            condition: '우왁굳 방송 10시간 이상 시청',
            rank: true,
        },
        {
            id: 4,
            image: tempImage,
            name: '화난 왁두',
            tag: '#우왁굳',
            condition: '우왁굳 방송 5시간 이상 시청',
            rank: true,
        },
    ];

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

                display: grid;
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

                    border-radius: 10px;
                    margin: 2% 0;
                    padding: 30px 50px;

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

            <div>
                <span
                    css={css`
                        position: relative;
                        top: 20px;
                        color: ${theme.colors.white};
                        font-size: 15px;
                    `}
                >
                    총 뱃지 수
                    <span
                        css={css`
                            color: rgba(114, 98, 168, 1);
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
                        background-color: rgba(114, 98, 168, 1);
                        border: none;
                        color: white;
                        padding: 1% 2.8%;
                        text-align: center;
                        font-size: 15px;
                        margin: 1% 1%;
                        border-radius: 10px;

                        position: relative;
                        left: 65%;
                    `}
                >
                    뱃지 수정
                </button>
                <button
                    type="button"
                    css={css`
                        /* 뱃지 수정, 삭제 버튼 */
                        background-color: rgba(114, 98, 168, 1);
                        border: none;
                        color: white;
                        padding: 1% 2.8%;
                        text-align: center;
                        font-size: 15px;
                        margin: 1% 1%;
                        border-radius: 10px;

                        position: relative;
                        left: 65%;
                    `}
                >
                    뱃지 삭제
                </button>
            </div>

            <hr
                css={css`
                    margin: 2% 0;
                `}
            />

            <div>
                <ol
                    css={css`
                        display: grid;
                        grid-template-columns: 5% 10% 20% 15% 25% 20%;
                        justify-content: stretch;
                        list-style-type: none;
                        background-color: rgba(32, 29, 43, 1);
                        text-align: center;
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
                {testInformation.map((data) => (
                    <ManagementBox
                        key={`management-box-${data.id}`}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
}
