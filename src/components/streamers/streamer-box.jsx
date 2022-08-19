import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function StreamerBox({ data }) {
    const theme = useTheme();
    return (
        <div
            // 전체 컨테이너
            css={css`
                display: grid;
                list-style-type: none;
                background-color: rgba(0, 0, 0, 0.2);
                text-align: left;
                border-radius: 8px;
                padding: 10px 35px;
                margin: 10px 0;
                width: 230px;
                height: 230px;
                color: white;
                font-size: 10px;
            `}
        >
            <div
                // 스트리머 이미지
                css={css`
                    padding: 5px;
                    margin: 0 -20px;
                    border-radius: 4px;
                    overflow: hidden;
                `}
            >
                <img
                    src={data.streamer.profileImage}
                    alt=""
                    css={css`
                        width: 200px;
                        height: 130px;
                        object-fit: cover;
                        margin: 0 -8px;
                    `}
                />
            </div>
            <div
                css={css`
                    font-weight: bold;
                    font-size: 15px;
                    margin: 5px -15px;
                `}
            >
                {data.streamer.userName}
            </div>
            <span
                css={css`
                    padding: 5px;
                    margin: 0 -20px;
                `}
            >
                팔로워
                <span
                    css={css`
                        text-align: right;
                    `}
                >
                    {' '}
                    7.6
                </span>
                만
            </span>

            <span
                css={css`
                    padding: 5px;
                    margin: 0 -20px;
                `}
            >
                ♥
                <span
                    css={css`
                        text-align: right;
                    `}
                >
                    {' '}
                    1.7K
                </span>
            </span>
        </div>
    );
}

StreamerBox.propTypes = {
    data: PropTypes.object.isRequired,
};
