import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import tempImage from '../../assets/mock/dog.jpg';

import ReplyBox from './reply-box';
import ReputationTable from './reputation-table';

import UserProfileImage from 'components/user-profile-image';

export default function CommentBox({
    image,
    nickName,
    title,
    contents,
    like,
    dislike,
    comment,
}) {
    const replies = [
        {
            image: tempImage,
            replyNickName: '답트수1',
            replyTitle: '감자국명예시민',
            replyContents: 'ㅇㅈ합니다.',
        },
        {
            image: tempImage,
            replyNickName: '답트수2',
            replyTitle: '이세돌팬',
            replyContents: '이건 못참지~',
        },
        {
            image: tempImage,
            replyNickName: '답트수3',
            replyTitle: '로렘입숨',
            replyContents:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];
    const theme = useTheme();
    const [showReply, setShowReply] = useState(false);

    return (
        <div
            css={css`
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto auto auto;
                align-items: center;
                column-gap: 16px;
            `}
        >
            <UserProfileImage
                css={css`
                    grid-column: 1;
                    grid-row-start: 1;
                    grid-row-end: 4;
                `}
                image={image}
                size={60}
            />
            <div
                // 닉네임 및 칭호
                css={css`
                    grid-column: 2;
                    grid-row: 1;

                    display: flex;
                    align-items: flex-end;
                    column-gap: 5px;

                    margin-bottom: 5px;
                `}
            >
                <div
                    // 닉네임
                    css={css`
                        font-size: 1rem;
                        font-weight: bold;
                        color: ${theme.colors.white};
                    `}
                >
                    {nickName}
                </div>
                <div
                    // 칭호
                    css={css`
                        font-size: 0.8rem;
                        color: ${theme.colors.white};
                    `}
                >
                    {title}
                </div>
            </div>
            <div
                // 댓글 내용
                css={css`
                    grid-column: 2;
                    grid-row: 2;

                    font-size: 0.9rem;
                    font-weight: bold;
                    color: ${theme.colors.white};

                    text-align: start;
                `}
            >
                {contents}
            </div>
            <div
                // 평판 및 답글 및 신고
                css={css`
                    grid-column: 2;
                    grid-row: 3;

                    display: flex;
                    column-gap: 20px;
                    align-items: center;
                `}
            >
                <ReputationTable
                    // 평판
                    like={like}
                    dislike={dislike}
                    comment={comment}
                    size={16}
                    css={css``}
                />
                <button
                    type="button"
                    onClick={() => {
                        setShowReply(!showReply);
                    }}
                    css={css`
                        cursor: pointer;
                        color: rgba(255, 255, 255, 0.5);
                        background-color: transparent;

                        border: 0;
                        font-size: 1rem;
                        font-weight: bold;

                        :hover {
                            color: rgba(255, 255, 255, 0.9);
                        }
                    `}
                >
                    답글
                </button>
            </div>
            {showReply && (
                <div
                    // 답글 컨테이너
                    css={css`
                        grid-column-start: 1;
                        grid-column-end: 3;
                        grid-row: 4;

                        margin: 0px auto;

                        //background-color: black;
                        height: auto;
                        width: 90%;
                    `}
                >
                    {replies.map((reply) => (
                        <ReplyBox
                            image={tempImage}
                            nickName={reply.replyNickName}
                            title={reply.replyTitle}
                            contents={reply.replyContents}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

CommentBox.propTypes = {
    image: PropTypes.string.isRequired,
    nickName: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number,
    comment: PropTypes.number,
};

CommentBox.defaultProps = {
    nickName: 'Default Nickname',
    title: 'Defalut Title',
    contents: 'Defalut Title',
    like: 0,
    dislike: 0,
    comment: 0,
};
