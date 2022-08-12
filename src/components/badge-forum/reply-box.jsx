import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import UserProfileImage from 'components/user-profile-image';

export default function ReplyBox({ image, nickName, title, contents }) {
    const theme = useTheme();

    return (
        <div
            // 그리드 컨테이너
            css={css`
                display: grid;
                grid-template-columns: 60px auto;
                grid-template-rows: auto auto;

                margin: 20px 0px;

                column-gap: 10px;
                row-gap: 5px;
            `}
        >
            <UserProfileImage
                image={image}
                size={60}
                css={css`
                    grid-column: 1;
                    grid-row-start: 1;
                    grid-row-end: 3;
                `}
            />
            <div
                // 닉네임 및 칭호 컨테이너
                css={css`
                    grid-column: 2;
                    grid-row: 1;

                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;

                    column-gap: 7px;
                `}
            >
                <div
                    // 닉네임
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1.1rem;
                        font-weight: bold;
                    `}
                >
                    {nickName}
                </div>
                <div
                    // 닉네임
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 0.7rem;
                    `}
                >
                    {title}
                </div>
            </div>
            <div
                css={css`
                    grid-column: 2;
                    grid-row: 2;

                    text-align: start;

                    color: ${theme.colors.white};
                    font-size: 1rem;
                `}
            >
                {contents}
            </div>
        </div>
    );
}

ReplyBox.propTypes = {
    image: PropTypes.string.isRequired,
    nickName: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.string,
};

ReplyBox.defaultProps = {
    nickName: 'Default Nickname',
    title: 'Defalut Title',
    contents: 'Defalut Title',
};
