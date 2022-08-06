import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import CommentImage from '../../assets/mock/comment.png';
import DisLikeImage from '../../assets/mock/dislike.png';
import LikeImage from '../../assets/mock/like.png';

const Button = styled.button`
    background: 0;
    border: 0;

    padding: 0;
    border-width: 0;

    :hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const Num = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`;

export default function ReputationTable({ like, dislike, comment }) {
    const theme = useTheme();

    return (
        <div
            css={css`
                display: grid;
                grid-template-columns: repeat(6, 1fr);

                align-items: center;
                justify-content: center;

                column-gap: 6px;

                width: auto;
                height: auto;
            `}
        >
            <Button
                // 좋아요 버튼
                type="button"
            >
                <img
                    src={LikeImage}
                    alt="like"
                    css={css`
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    `}
                />
            </Button>
            <Num>{like}</Num>
            <Button
                // 싫어요 버튼
                type="button"
            >
                <img
                    src={DisLikeImage}
                    alt="like"
                    css={css`
                        object-fit: cover;
                    `}
                />
            </Button>
            <Num>{dislike}</Num>
            <Button as="div">
                <img
                    src={CommentImage}
                    alt="like"
                    css={css`
                        object-fit: cover;
                    `}
                />
            </Button>
            <Num>{comment}</Num>
        </div>
    );
}

ReputationTable.propTypes = {
    like: PropTypes.number,
    dislike: PropTypes.number,
    comment: PropTypes.number,
};

ReputationTable.defaultProps = {
    like: 0,
    dislike: 0,
    comment: 0,
};
