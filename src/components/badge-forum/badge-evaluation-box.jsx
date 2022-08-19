import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import { usePrevious } from 'react-use';
import useSWR from 'swr';

import CommentBox from './comment-box';
import CommentInputBox from './comment-input-box';
import ReputationTable from './reputation-table';

import Badge from 'components/badges/badge';
import useFetcher from 'hooks/use-fetcher';

export default function BadgeEvaluationBox({ onClick, badge, enabled }) {
    const theme = useTheme();

    const comments = useSWR(`/badge/${badge.id}/comment`, useFetcher(), {
        isPaused: () => enabled === false,
    });

    const previousEnabled = usePrevious(enabled);

    useEffect(() => {
        if (previousEnabled === false && enabled === true) {
            comments.mutate();
        }
    }, [comments, previousEnabled, enabled]);

    return (
        <div
            css={css`
                background-color: rgba(0, 0, 0, 0.3);

                border-radius: 8px;

                padding: 16px;
                width: 100%;
            `}
        >
            <button
                type="button"
                onClick={onClick}
                css={css`
                    border: 0;
                    padding: 0;
                    display: block;
                    cursor: pointer;
                    display: grid;
                    grid-template-columns: 100px 1fr auto;
                    column-gap: 10px;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    width: 100%;
                `}
            >
                <div
                    // 뱃지 이미지
                    css={css`
                        grid-column: 1;
                        grid-row-start: 1;
                        grid-row-end: 4;

                        color: ${theme.colors.primary1};
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
                    <Badge badge={badge} size={100} />
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
                    {badge.name}
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
                    {badge.condition}
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
                    {badge.description}
                </div>
                <div
                    css={css`
                        grid-column: 3;
                        grid-row: 3;
                    `}
                >
                    <ReputationTable
                        like={badge.like}
                        dislike={badge.dislike}
                        comment={badge.commentCount}
                        size={20}
                    />
                </div>
            </button>

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
                    `}
                >
                    <CommentInputBox
                        id={badge.id}
                        onSubmit={() => {
                            comments.mutate();
                        }}
                    />
                    {comments.data !== undefined ? (
                        comments.data.map((comment) => (
                            <CommentBox
                                key={`comment-${comment.id}`}
                                comment={comment}
                            />
                        ))
                    ) : (
                        <MoonLoader color="#ffffff" />
                    )}
                </div>
            )}
        </div>
    );
}

BadgeEvaluationBox.propTypes = {
    onClick: PropTypes.func,
    badge: PropTypes.object.isRequired,
    enabled: PropTypes.bool,
};

BadgeEvaluationBox.defaultProps = {
    onClick: undefined,
    enabled: false,
};
