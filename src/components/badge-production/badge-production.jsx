import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import DropHereImage from 'assets/mock/production/DropHere.png';
import Title from 'components/title';

const Button = styled.button`
    background-color: rgba(114, 98, 168, 1);
    border: none;
    color: white;
    padding: 1% 10%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 1% 1% 1% 11%;
    border-radius: 10px;
`;

export default function Achievements() {
    const theme = useTheme();

    return (
        <div
            // 전체 컨테이너 박스
            css={css`
                width: 1000px;
                height: 100%;
                margin: auto;
            `}
        >
            <Title>뱃지 만들기</Title>
            <div
                // 큰 뱃지 생성 박스
                css={css`
                    background-color: rgba(62, 53, 92, 1);

                    width: 900px;
                    height: 480px;
                    margin: 0% 5%;
                    border-radius: 10px;

                    display: grid;
                `}
            >
                <div
                    // 업적 사진 박스 (좌)
                    css={css`
                        background-color: rgba(239, 239, 239, 0.19);
                        grid-row: 1;
                        grid-column: 1;
                        grid-column-end: 4;

                        width: 250px;
                        height: 100px;
                        padding: 20% 0;
                        margin: 20% 20% 1% 20%;

                        text-align: center;
                    `}
                >
                    <img
                        src={DropHereImage}
                        alt="Drop Here"
                        css={css`
                            max-width: 35%;
                        `}
                    />
                </div>
                <div
                    // 업적 박스 (우)
                    css={css`
                        grid-row: 1;
                        grid-column: 4;

                        width: 500px;
                        height: auto;
                        margin: 9% 0% 1% 0%;
                    `}
                >
                    <div
                        // 업적 입력 박스
                        css={css`
                            color: ${theme.colors.white};
                            font-size: 18px;
                            font-weight: bold;
                            text-align: left;

                            width: auto;
                            height: auto;
                        `}
                    >
                        <label>
                            <p>
                                업적명
                                <input
                                    css={css`
                                        width: 70%;
                                        height: 30%;
                                        border-radius: 10px;
                                        margin: 0 38px;
                                    `}
                                    type="text"
                                    maxLength="15"
                                />
                            </p>
                            <p>
                                업적설명
                                <input
                                    css={css`
                                        width: 70%;
                                        height: auto;
                                        padding: 0 0 12% 0;
                                        border-radius: 10px;
                                        margin: 0 20px;
                                    `}
                                    type="text"
                                    maxLength="200"
                                />
                            </p>
                            <p>
                                획득조건
                                <input
                                    css={css`
                                        width: 70%;
                                        height: auto;
                                        padding: 0 0 7% 0;
                                        border-radius: 10px;
                                        margin: 0 20px;
                                    `}
                                    type="text"
                                    maxLength="200"
                                />
                            </p>
                            <p>
                                경험치
                                <input
                                    css={css`
                                        width: 10%;
                                        height: 10%;
                                        border-radius: 10px;
                                        margin: 0 38px;
                                    `}
                                    type="number"
                                    min="0"
                                    max="999"
                                />
                            </p>
                        </label>
                    </div>
                </div>
                <div
                    // 생성, 취소 버튼
                    css={css`
                        width: 100%;
                        height: auto;

                        grid-row: 2;
                        grid-column-start: 2;
                        grid-column-end: 5;
                    `}
                >
                    <Button>생성</Button>
                    <Button>취소</Button>
                </div>
            </div>
        </div>
    );
}
