import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import tempUserImage from '../../assets/mock/cat.jpeg';

import UserProfileImage from 'components/user-profile-image';
import useAxios from 'hooks/use-axios';

export default function CommentInputBox({ id, onSubmit }) {
    const theme = useTheme();
    const axios = useAxios();
    const { register, handleSubmit } = useForm();

    const [editingText, setEditingText] = useState('');
    const [submitting, setSubmitting] = useState(false);

    return (
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: row;
                column-gap: 20px;
                width: 100%;
            `}
        >
            <UserProfileImage image={tempUserImage} size={60} />
            <form
                // 코멘트 작성 폼
                onSubmit={handleSubmit((data) => {
                    setSubmitting(true);
                    axios
                        .post(
                            `https://api.teusubox.shop/comment?badge=${id}`,
                            data,
                        )
                        .then((response) => {
                            // 상위 컴포넌트에 이벤트 전달
                            onSubmit?.(response.data);
                            // 버튼 활성화
                            setSubmitting(false);
                            // 텍스트 비우기
                            setEditingText('');
                        });
                })}
                css={css`
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    height: 100%;
                    column-gap: 20px;
                    height: 60px;
                `}
            >
                <input
                    value={editingText}
                    // 입력부
                    css={css`
                        background-color: ${theme.colors.white};

                        border-width: 0;
                        border-radius: 6px;

                        padding: 10px;

                        flex: 1;
                        resize: none;
                    `}
                    placeholder="코멘트 작성하기"
                    onInput={(event) => {
                        setEditingText(event.target.value);
                    }}
                    {...register('comment')}
                />
                <button
                    // 제출 부
                    disabled={submitting}
                    type="submit"
                    css={css`
                        background-color: ${theme.colors.primary1};
                        color: ${theme.colors.white};

                        font-weight: bold;

                        border: 0;
                        border-radius: 6px;

                        padding: 0 40px;
                        cursor: pointer;
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
    onSubmit: PropTypes.func,
};

CommentInputBox.defaultProps = {
    onSubmit: undefined,
};
