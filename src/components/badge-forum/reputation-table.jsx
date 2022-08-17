import { css } from '@emotion/react';
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
    font-weight: bold;

    color: ${({ theme }) => theme.colors.white};
`;

export default function ReputationTable({ like, dislike, comment, size }) {
    return (
        <div
            css={css`
                display: grid;
                grid-template-columns: repeat(6, 1fr);

                align-items: center;
                justify-content: center;

                column-gap: 6px;

                width: auto;
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
                        height: ${size}px;
                    `}
                />
            </Button>
            <Num
                css={css`
                    font-size: ${size}px;
                `}
            >
                {like}
            </Num>
            <Button
                // 싫어요 버튼
                type="button"
                size={size}
            >
                <img
                    src={DisLikeImage}
                    alt="like"
                    css={css`
                        object-fit: cover;
                        height: ${size}px;
                    `}
                />
            </Button>
            <Num
                css={css`
                    font-size: ${size}px;
                `}
            >
                {dislike}
            </Num>
            <Button as="div" size={size}>
                <img
                    src={CommentImage}
                    alt="like"
                    css={css`
                        object-fit: cover;
                        height: ${size}px;
                    `}
                />
            </Button>
            <Num
                css={css`
                    font-size: ${size}px;
                `}
            >
                {comment}
            </Num>
        </div>
    );
}

ReputationTable.propTypes = {
    like: PropTypes.number,
    dislike: PropTypes.number,
    comment: PropTypes.number,
    size: PropTypes.number,
};

ReputationTable.defaultProps = {
    like: 0,
    dislike: 0,
    comment: 0,
    size: 40,
};
