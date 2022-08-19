import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import RankedIndicator from './ranked-indicator';

import tempImage from 'assets/mock/dog.jpg';

export default function ManagementBox({ data }) {
    const theme = useTheme();

    return (
        <div
            // 전체 컨테이너
            css={css`
                display: grid;

                grid-template-columns: 5% 10% 20% 15% 25% 20%;

                list-style-type: none;
                background-color: rgba(32, 29, 43, 1);

                align-items: center;
                justify-items: center;

                border-radius: 10px;
                margin: 1% 0;
                padding: 1% 50px;
                width: 1000px;
                height: auto;
                color: white;
                font-size: 15px;
            `}
        >
            <input
                // 체크박스
                type="checkbox"
                css={css`
                    grid-column: 1;

                    border: 10px;
                    border-color: ${theme.colors.white};
                    width: 15px;
                    height: 15px;
                `}
            />
            <div
                css={css`
                    grid-column: 2;
                    width: 70px;
                    height: 70px;

                    border-radius: 4px;
                    border-width: 2px;
                    border-color: white;
                    overflow: hidden;
                `}
            >
                <img
                    src={tempImage}
                    alt=""
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
                    grid-column: 3;
                `}
            >
                {data.name}
            </div>
            <div
                // 뱃지 태그
                css={css`
                    grid-column: 4;
                `}
            >
                {data.tag}
            </div>
            <div
                // 달성 조건
                css={css`
                    grid-column: 5;
                `}
            >
                {data.condition}
            </div>
            <RankedIndicator
                css={css`
                    grid-column: 6;
                `}
                isRanked={data.rank}
            />
        </div>
    );
}

ManagementBox.propTypes = {
    data: PropTypes.object.isRequired,
};
