import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

import tempUserImage from '../../assets/mock/cat.jpeg';

import UserProfileImage from 'components/user-profile-image';
import useAxios from 'hooks/use-axios';

export default function CommentInputBox({ id }) {
    const theme = useTheme();
    const axios = useAxios();
    const { register, handleSubmit } = useForm();

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
                onSubmit={handleSubmit((data) => {
                    axios
                        .post(
                            `https://api.teusubox.shop/comment?badge=${id}`,
                            data,
                        )
                        .then(function (response) {
                            console.log(response);
                        });
                })}
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
                        resize: none;
                    `}
                    placeholder="코멘트 작성하기"
                    {...register('comment')}
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

CommentInputBox.propTypes = {
    id: PropTypes.number.isRequired,
};
