import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import deleteImage from '../../assets/mock/badge-control-box-images/delete.png';
import makeImage from '../../assets/mock/badge-control-box-images/make.jpg';
import watchImage from '../../assets/mock/badge-control-box-images/watch.png';

const Box = styled.div`
    background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(62, 53, 92, 0.5) 50%,
            rgba(62, 53, 92, 0.1) 100%
        ),
        url(${(props) => props.image});
    background-position: center center;
    background-size: cover;

    height: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    flex: 1;
    padding: 20px;
`;

const Title = styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 30px;
`;

const Button = styled(Link)`
    background-color: ${(props) => props.theme.colors.primary2};

    border-radius: 8px;
    border-width: 0px;

    color: ${(props) => props.theme.colors.white};
    font-size: 1rem;
    font-weight: bold;

    padding: 20px;
`;

export default function BadgeControlBox() {
    return (
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: row;
                justify-content: stretch;
                column-gap: 20px;
            `}
        >
            <Box image={makeImage}>
                <Title>나만의 뱃지를 직접 만들자!</Title>
                <Button to="/badge-production">뱃지 만들기</Button>
            </Box>
            <Box image={watchImage}>
                <Title>다른 사람이 만든 뱃지를 보자!</Title>
                <Button to="/badge-forum">뱃지 게시판</Button>
            </Box>
            <Box image={deleteImage}>
                <Title>내가 만든 뱃지를 관리하자!</Title>
                <Button to="/badge-management">뱃지 수정/삭제</Button>
            </Box>
        </div>
    );
}
