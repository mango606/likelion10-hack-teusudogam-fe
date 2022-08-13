import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import "./BadgeProduction.css";
import DropHereImage from 'assets/mock/production/DropHere.png';

export default function Achievements() {
    const theme = useTheme();

    return (
        <div
            // 큰 업적 박스
            css={css`
                    background-color: rgba(62, 53, 92, 1);
                    
                    width: 60%;
                    height: auto;

                    border-radius: 10px;

                    display: inline-block;
                `}
        >
            <div
                // 업적 박스(좌)
                css={css`
                background-color: rgba(239, 239, 239, 0.19);

                    width: 30%;
                    text-align: center;
                    padding : 10% 0;
                    margin: 6% 5% 1% 5%;
                    height: auto;

                    float: left;
                `}
            >
                <img src={DropHereImage} style={{ maxWidth: '40%' }} />
            </div>
            <div
                // 업적 박스 (우)
                css={css`
                    width: 60%;
                    height: auto;

                    margin: 5% 0% 1% 0%;
                    float: right;
                `}
            >
                <div
                    // 업적 입력 박스
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 18px;
                        font-weight: bold;
                        text-align: left;
                    `}
                >
                    <label>
                        <p>업적명
                            <input className="name"
                                type="text"
                                maxlength="15"
                            />
                        </p>
                        <p>업적설명
                            <input className="explanation"
                                type="text"
                                maxlength="200"
                            />
                        </p>
                        <p>획득조건
                            <input className="condition"
                                type="text"
                                maxlength="200"
                            />
                        </p>
                        <p>경험치
                            <input className="experience"
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
                height: 30%;
            `}
            >
                <button class="prod">생성</button>
                <button class="cancel">취소</button>
            </div>
        </div>
    );
}