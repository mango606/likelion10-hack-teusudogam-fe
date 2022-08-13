import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import "./BadgeManagement.css";
import Information from './BadgeInformation';

import Glass from 'assets/mock/management/glass.png';

import { Link } from "react-router-dom";

// 뱃지 검색 함수
searchSpace = (event) => {

}

const styleInfo = {
    padding: "5%",
}

const styleInfo2 = {
    padding: "7%",
}

const items = Information.map(data => {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox"></input>
                    <span style={styleInfo}><img src={data.route} style={{ maxWidth: '7%' }} /></span>
                    <span style={styleInfo}>{data.name}</span>
                    <span style={styleInfo}>{data.tag}</span>
                    <span style={styleInfo}>{data.condition}</span>
                    <span style={styleInfo}>{data.rank}</span>
                </li>
            </ul>
        </div>
    )
})
// 검색 조건
state = {
    con: this
}

number = 4;

function ButtonLink({ link, children, selected }) {
    const theme = useTheme();

    return (
        <div>
            <a
                href={link}
            >
                {children}
            </a>
        </div>
    );
}

ButtonLink.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    selected: PropTypes.bool,
};

ButtonLink.defaultProps = {
    selected: false,
};

export default function BadgeManagement() {
    const theme = useTheme();

    return (
        <div
            // 전체 컨테이너
            css={css`
                width: 1200px;
                height: 100%;

                display: inline-block;
            `}
        >
            <div
                // 이름
                css={css`
                    align-items: center;

                    color: ${theme.colors.white};
                    font-size: 2.5rem;
                    font-weight: bold;
                `}
            >
                뱃지 수정/삭제
            </div>
            <div
                // 뱃지 검색 박스
                css={css`
                background-color: rgba(32, 29, 43, 1);

                justify-content: center;

                border-radius: 10px;
                margin: 4% 0 2% 0;
                
                padding: 3% 4%;
                margin-left: 3.4%;
                width: 88.6%;
                height: 30%;
                `}
            >
                <div
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
            <div
                css={css`
            color: ${theme.colors.white};
            font-size: 15px;

            text-align: left;
            margin-left: 4%;
        `}
            >
                <span css={css`
                position: relative;
                top: 20px;
                `}>
                    총 뱃지 수
                <span css={css`
                        color: rgba(114, 98, 168, 1);
                        text-align: right;
                    `}> {number}
                </span>
                개
                </span>
                <ButtonLink link="/badge-revise" selected>
                <button class="change">뱃지 수정</button>
                </ButtonLink>
                <button class="delete">뱃지 삭제</button>
            </div>
            <hr></hr>
            <div
                // 뱃지 분류 박스
                css={css`
                background-color: rgba(32, 29, 43, 1);

                justify-content: center;

                border-radius: 10px;
                margin: 3% 0 1% 0;
                
                padding: 2% 4%;
                margin-left: 3.4%;
                width: 88.6%;
                height: 20%;
                `}
            >
                <div
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 15px;

                        text-align: center;
                    `}
                >
                    <input type="checkbox"></input>
                    <span style={styleInfo2}>이미지</span>
                    <span style={styleInfo2}>뱃지 이름</span>
                    <span style={styleInfo2}>태그</span>
                    <span style={styleInfo2}>달성 조건</span>
                    <span style={styleInfo2}>랭크 여부</span>
                </div>
            </div>
            <div>
                {items}
            </div>
        </div>
    );
}