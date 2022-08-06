import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import tempImage from '../../assets/mock/cat.jpeg';

import ReputationTable from './reputation-table';

export default function BadgeEvaluationBox({
    onClick,
    image,
    name,
    condition,
    like,
    dislike,
    comment,
    enabled,
}) {
    const theme = useTheme();

    const contents = [
        {
            image: tempImage,
            nickName: '트수1',
            title: '왁두수집가',
            contents: '적당한 조건의 칭호 같아요! Rank 기원!',
        },
        {
            image: tempImage,
            nickName: '트수2',
            title: '녹두전장인',
            contents: '이건 못참지!',
        },
    ];

    return (
        <button
            type="button"
            onClick={onClick}
            css={css`
                background-color: rgba(0, 0, 0, 0.3);
                width: auto;
                height: auto;

                display: grid;
                grid-template-columns: 100px 500px auto;
                grid-template-rows: auto auto auto;

                align-items: center;
                justify-content: center;

                column-gap: 10px;

                border-radius: 8px;
                border-width: 0;

                padding: 8px;

                ${onClick !== undefined &&
                css`
                    cursor: pointer;
                    :hover {
                        background-color: red;
                    }
                `}

                ${enabled === true && css``}
            `}
        >
            <div
                // 뱃지 이미지
                css={css`
                    grid-column: 1;
                    grid-row-start: 1;
                    grid-row-end: 4;

                    color: ${theme.colors.primary1};
                    background-color: ${theme.colors.white};
                    padding: 0;
                    border: 0;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;

                    width: auto;
                    height: auto;
                `}
            >
                <img
                    src={image}
                    alt={name}
                    css={css`
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    `}
                />
            </div>
            <div
                // 뱃지 이름
                css={css`
                    grid-column: 2;
                    grid-row: 1;

                    background-color: teal;
                    width: auto;
                    height: auto;

                    font-size: 1.5rem;
                    color: ${theme.colors.white};
                    font-weight: bold;
                    text-align: left;

                    //margin-bottom: 7px;
                `}
            >
                {name}
            </div>
            <div
                // 달성 조건
                css={css`
                    grid-column: 2;
                    grid-row: 2;

                    background-color: orange;

                    font-size: 1.2rem;
                    color: ${theme.colors.white};
                    font-weight: bold;
                    text-align: left;

                    width: auto;
                    height: auto;

                    //margin-bottom: 5px;
                `}
            >
                달성 조건
            </div>
            <div
                css={css`
                    grid-column: 2;
                    grid-row: 3;

                    background-color: #d69fd6;

                    font-size: 1rem;
                    color: ${theme.colors.white};
                    font-weight: bold;
                    text-align: left;

                    width: auto;
                    height: auto;
                `}
            >
                {condition}
            </div>
            <div
                css={css`
                    grid-column: 3;
                    grid-row-start: 1;
                    grid-row-end: 4;
                `}
            >
                <ReputationTable
                    like={like}
                    dislike={dislike}
                    comment={comment}
                />
            </div>
        </button>
    );
}

BadgeEvaluationBox.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    condition: PropTypes.string,
    image: PropTypes.string.isRequired,
    like: PropTypes.number,
    dislike: PropTypes.number,
    comment: PropTypes.number,
};

BadgeEvaluationBox.defaultProps = {
    onClick: undefined,
    name: 'Default Name',
    condition: 'Default Condition',
    like: 0,
    dislike: 0,
    comment: 0,
};
