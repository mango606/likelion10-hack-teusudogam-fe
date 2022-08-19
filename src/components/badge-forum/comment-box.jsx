import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ReputationTable from './reputation-table';

import UserProfileImage from 'components/user-profile-image';

export default function CommentBox({ comment }) {
    // const replies = useSWR(`/badge/${id}`, useFetcher({}));
    const theme = useTheme();
    const [showReply, setShowReply] = useState(false);

    // console.log(replies.data);

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
                image={comment.author.profileImage}
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
                    {comment.author.userName}
                </div>
                <div
                    // 칭호
                    css={css`
                        font-size: 0.8rem;
                        color: ${theme.colors.white};
                    `}
                >
                    {comment.title}
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
                {comment.comment}
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
                    like={comment.like}
                    dislike={comment.dislike}
                    comment={0} // TODO: 여기 채우기
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

                        width: 100%;
                    `}
                >
                    {/* {replies.map((reply) => (
                        <ReplyBox
                            image={tempImage}
                            nickName={reply.replyNickName}
                            title={reply.replyTitle}
                            contents={reply.replyContents}
                        />
                    ))} */}
                </div>
            )}
        </div>
    );
}

CommentBox.propTypes = {
    comment: PropTypes.object.isRequired,
};
