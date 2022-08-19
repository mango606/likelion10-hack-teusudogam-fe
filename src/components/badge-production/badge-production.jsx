import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import Title from 'components/title';
import useAxios from 'hooks/use-axios';

function TextInput({ label, id, type, className, multiline }) {
    const { register } = useFormContext();
    const inputStyle = useMemo(
        () => css`
            width: 100%;
            padding: 6px;
            grid-column: 1;
            grid-row: 2;
            line-height: 1rem;
            resize: none;
            border-radius: 4px;
        `,
        [],
    );
    return (
        <label
            htmlFor={id}
            className={className}
            css={css`
                display: grid;
                grid-template-columns: auto;
                grid-template-rows: auto 1fr;
            `}
        >
            <p
                css={css`
                    margin: 0;
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #ffffff;
                    margin-bottom: 4px;
                    grid-column: 1;
                    grid-row: 1;
                `}
            >
                {label}
            </p>
            {multiline ? (
                <textarea id={id} css={inputStyle} {...register(id)} />
            ) : (
                <input id={id} type={type} css={inputStyle} {...register(id)} />
            )}
        </label>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    className: PropTypes.string,
    multiline: PropTypes.bool,
};

TextInput.defaultProps = {
    label: undefined,
    type: 'text',
    className: undefined,
    multiline: false,
};

const Button = styled.button`
    background-color: rgba(114, 98, 168, 1);
    border: none;
    color: white;
    padding: 6px 12px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    border-radius: 4px;
`;

export default function BadgeProduction() {
    const form = useForm();
    const [droppedImage, setDroppedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (droppedImage === null) {
            setImageUrl(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(droppedImage);

        fileReader.onload = () => {
            setImageUrl(fileReader.result);
        };
    }, [droppedImage]);

    const onDrop = useCallback(
        (files) => {
            if (Array.isArray(files) && files.length > 0) {
                form.setValue('image', files[0]);
                setDroppedImage(files[0]);
            }
        },
        [form],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    const axios = useAxios();

    const onSubmit = useCallback(
        (values) => {
            const data = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (key === 'field') {
                    data.append(key, value[1]);
                } else {
                    data.append(key, value);
                }
            });
            axios.post('/badge', data);
        },
        [axios],
    );

    return (
        <div
            // 전체 컨테이너 박스
            css={css`
                width: 1000px;
                margin: 0 auto;
            `}
        >
            <Title>뱃지 만들기</Title>
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    // 큰 뱃지 생성 박스
                    css={css`
                        background-color: rgba(62, 53, 92, 1);

                        width: 100%;
                        border-radius: 6px;

                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-template-rows: 1fr 0.2fr;

                        row-gap: 20px;
                        column-gap: 20px;

                        padding: 20px;
                    `}
                >
                    <div
                        type="button"
                        css={css`
                            /* background-color: rgba(239, 239, 239, 0.19); */
                            grid-row: 1;
                            grid-column: 1;

                            aspect-ratio: 1;

                            display: flex;
                            align-items: center;
                            justify-content: center;

                            border: 0;
                            border-radius: 4px;
                            overflow: hidden;

                            ${imageUrl !== null
                                ? css`
                                      background-image: url(${imageUrl});
                                      background-size: cover;
                                  `
                                : undefined}
                        `}
                        {...getRootProps()}
                    >
                        <input
                            {...getInputProps()}
                            css={css`
                                position: absolute;
                                opacity: 0;
                                pointer-events: none;
                            `}
                        />
                        <div
                            css={css`
                                color: #ffffff;
                                width: 100%;
                                height: 100%;

                                display: flex;
                                align-items: center;
                                justify-content: center;

                                background-color: rgba(0, 0, 0, 0.25);
                            `}
                        >
                            클릭하거나 드래그
                        </div>
                    </div>
                    <div
                        // 업적 박스 (우)
                        css={css`
                            grid-row: 1;
                            grid-column-start: 2;
                            grid-column-end: 5;
                            width: 100%;

                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: auto 1fr;
                            column-gap: 20px;
                            row-gap: 20px;
                        `}
                    >
                        <TextInput
                            id="name"
                            label="이름"
                            css={css`
                                grid-column: 1;
                                grid-row: 1;
                            `}
                        />
                        <TextInput
                            id="exp"
                            label="획득 경험치"
                            type="number"
                            css={css`
                                grid-column: 2;
                                grid-row: 1;
                            `}
                        />
                        <TextInput
                            id="condition"
                            label="획득 조건"
                            css={css`
                                grid-column: 1;
                                grid-row: 2;
                            `}
                            multiline
                        />
                        <TextInput
                            id="desc"
                            label="설명"
                            css={css`
                                grid-column: 2;
                                grid-row: 2;
                            `}
                            multiline
                        />
                    </div>
                    <Button
                        css={css`
                            grid-column-start: 1;
                            grid-column-end: 3;
                            grid-row: 2;
                        `}
                    >
                        생성
                    </Button>
                    <Button
                        css={css`
                            grid-column-start: 3;
                            grid-column-end: 5;
                            grid-row: 2;
                        `}
                    >
                        취소
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
}
