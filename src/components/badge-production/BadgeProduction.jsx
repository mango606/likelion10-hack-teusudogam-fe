import { css, useTheme } from '@emotion/react';
import React from 'react';

import './BadgeProduction.css';
import DropHereImage from 'assets/mock/production/DropHere.png';
import Title from 'components/title';

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
                    <img src={DropHereImage} style={{ maxWidth: '35%' }} />
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
                                    className="nameBox"
                                    type="text"
                                    maxLength="15"
                                />
                            </p>
                            <p>
                                업적설명
                                <input
                                    className="explanationBox"
                                    type="text"
                                    maxLength="200"
                                />
                            </p>
                            <p>
                                획득조건
                                <input
                                    className="conditionBox"
                                    type="text"
                                    maxLength="200"
                                />
                            </p>
                            <p>
                                경험치
                                <input
                                    className="experienceBox"
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
                    <button className="prod">생성</button>
                    <button className="cancel">취소</button>
                </div>
            </div>
        </div>
    );
}
