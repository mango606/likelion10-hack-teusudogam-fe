import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import "./BadgeManagement.css";
import Information from './BadgeInformation';

import Glass from 'assets/mock/management/glass.png';

import { Link } from "react-router-dom";

import Title from 'components/title';

// 뱃지 검색 함수
searchSpace = (event) => {

}

// 뱃지 리스트 스타일
const styleInfo = {
    padding: "1%"
}

const items = Information.map(data => {
    return (
        <div>
            <ol>
                <input type="checkbox"></input>
                <span style={styleInfo}><img src={data.route} style={{ maxWidth: '80px' }} /></span>
                <span style={styleInfo}>{data.name}</span>
                <span style={styleInfo}>{data.tag}</span>
                <span style={styleInfo}>{data.condition}</span>
                <span style={styleInfo}>{data.rank}</span>
            </ol>
        </div>
    )
})

// 검색 조건
state = {
}

// 뱃지 총 개수
number = 4;

export default function BadgeManagement() {
    const theme = useTheme();

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
                    <label>
                        뱃지 검색
                        <input className="search"
                            type="text"
                            placeholder=" 뱃지 이름 또는 태그 입력"
                            onChange={(e) => this.searchSpace(e)}
                        />

                        <button type="button" className="searchbt">
                            <img src={Glass} style={{ maxWidth: '50%' }} />
                        </button>

                        <select value={this.state.con}>
                            <option value="검색 조건" disabled>검색 조건</option>
                            <option value="뱃지 이름">뱃지 이름</option>
                            <option value="태그">태그</option>
                            <option value="랭크 여부">랭크 여부</option>
                        </select>
                    </label>
                </div>
            </div>

            <div>
                <span css={css`
                    position: relative;
                    top: 20px;
                    color: ${theme.colors.white};
                    font-size: 15px;
                `}>
                    총 뱃지 수
                    <span css={css`
                        color: rgba(114, 98, 168, 1);
                        text-align: right;
                    `}> {number}
                    </span>
                    개
                </span>

                <button class="change">뱃지 수정</button>
                <button class="delete">뱃지 삭제</button>
            </div>

            <hr css={css`
                    margin: 2% 0;
            `}></hr>

            <div>
                <ol>
                    <input type="checkbox"></input>
                    <span style={styleInfo}>이미지</span>
                    <span style={styleInfo}>뱃지 이름</span>
                    <span style={styleInfo}>태그</span>
                    <span style={styleInfo}>달성 조건</span>
                    <span style={styleInfo}>랭크 여부</span>
                </ol>
            </div>
            <div>
                {items}
            </div>
        </div>
    );
}