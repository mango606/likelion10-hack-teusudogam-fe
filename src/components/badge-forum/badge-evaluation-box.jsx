import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import tempImage from '../../assets/mock/cat.jpeg';

import CommentBox from './comment-box';
import CommentInputBox from './comment-input-box';
import ReputationTable from './reputation-table';

export default function BadgeEvaluationBox({
    onClick,
    image,
    name,
    description,
    condition,
    like,
    dislike,
    comment,
    enabled,
}) {
    const theme = useTheme();

    const comments = [
        {
            image: tempImage,
            nickName: '트수1',
            title: '왁두수집가',
            contents: '적당한 조건의 칭호 같아요! Rank 기원!',
            like: 17,
            dislike: 3,
            comment: 2,
            id: 1,
        },
        {
            image: tempImage,
            nickName: '트수2',
            title: '녹두전장인',
            contents: '이건 못참지!',
            like: 17,
            dislike: 3,
            comment: 2,
            id: 2,
        },
    ];

    return (
        <button
            type="button"
            onClick={onClick}
            css={css`
                background-color: rgba(0, 0, 0, 0.3);
                width: 1000px;
                height: auto;

                display: grid;
                grid-template-columns: 100px 500px 360px;
                grid-template-rows: auto auto auto auto;

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
                        //background-color: red;
                    }
                `}
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

                    font-size: 1.2rem;
                    color: ${theme.colors.white};
                    font-weight: bold;
                    text-align: left;

                    width: auto;
                    height: auto;

                    //margin-bottom: 5px;
                `}
            >
                {condition}
            </div>
            <div
                css={css`
                    grid-column: 2;
                    grid-row: 3;

                    font-size: 1rem;
                    color: ${theme.colors.white};
                    font-weight: bold;
                    text-align: left;

                    width: auto;
                    height: auto;
                `}
            >
                {description}
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
                    size={50}
                />
            </div>

            {enabled === true && (
                <div
                    // 해당 뱃지 누를 시 컨텐츠를 보여줌
                    css={css`
                        grid-column-start: 1;
                        grid-column-end: 4;
                        grid-row: 4;

                        display: flex;
                        flex-direction: column;
                        row-gap: 20px;

                        margin: 20px auto 0px auto;

                        height: auto;

                        width: 95%;
                    `}
                >
                    <CommentInputBox />
                    {comments.map((com) => (
                        <CommentBox
                            key={`com-${com.id}`}
                            image={tempImage}
                            nickName={com.nickName}
                            title={com.title}
                            contents={com.contents}
                            like={com.like}
                            dislike={com.dislike}
                            comment={com.comment}
                        />
                    ))}
                </div>
            )}
        </button>
    );
}

BadgeEvaluationBox.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    dislike: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    enabled: PropTypes.bool,
};

BadgeEvaluationBox.defaultProps = {
    onClick: undefined,
    enabled: false,
};
