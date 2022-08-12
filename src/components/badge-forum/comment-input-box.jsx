import { css, useTheme } from '@emotion/react';
import React from 'react';

import tempUserImage from '../../assets/mock/cat.jpeg';

import UserProfileImage from 'components/user-profile-image';

export default function CommentInputBox() {
    const theme = useTheme();

    return (
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                column-gap: 20px;

                align-items: center;
                //justify-content: center;
                background-color: transparent;
                width: 100%;
                height: 100px;
            `}
        >
            <UserProfileImage image={tempUserImage} size={90} />
            <form
                // 코멘트 작성 폼
                css={css`
                    display: flex;
                    column-gap: 20px;
                `}
            >
                <input
                    // 입력부
                    css={css`
                        background-color: ${theme.colors.white};

                        border-width: 0;
                        border-radius: 8px;

                        padding: 10px;

                        width: 650px;
                        height: 70px;
                    `}
                    placeholder="코멘트 작성하기"
                />
                <button
                    // 제출 부
                    type="submit"
                    css={css`
                        background-color: ${theme.colors.primary1};
                        color: ${theme.colors.white};

                        font-weight: bold;

                        border: 0;
                        border-radius: 12px;

                        width: 120px;
                        height: 90px;
                    `}
                >
                    작성 완료
                </button>
            </form>
        </div>
    );
}
