import { css, useTheme } from '@emotion/react';
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

    width: 400px;
    height: 450px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    padding-bottom: 40px;

    // grid-column: ${(props) => props.col};
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary2};

    width: 300px;
    height: 70px;
    border-radius: 8px;
    border-width: 0px;

    color: ${(props) => props.theme.colors.white};
    font-size: 1.4rem;
    font-weight: bold;

    margin-top: 20px;
`;

export default function BadgeControlBox() {
    const theme = useTheme();

    return (
        <div
            // 전체 컨테이너
            css={css`
                width: 1000px;
                height: 200px;

                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 100px auto;
                column-gap: 40px;
            `}
        >
            <h1
                css={css`
                    grid-column-start: 1;
                    grid-column-end: 4;
                    grid-row: 1;

                    margin-bottom: 40px;

                    color: ${theme.colors.white};
                `}
            >
                뱃지 관리
            </h1>
            <Box image={makeImage} /* col="1" */>
                <h1
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1.5rem;
                        font-weight: 900;
                        margin-bottom: 30px;
                    `}
                >
                    나만의 뱃지를 직접 만들자!
                </h1>
                <Button>뱃지 만들기</Button>
            </Box>
            <Box image={watchImage} /* col="2" */>
                <h1
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1.5rem;
                        font-weight: 900;
                        margin-bottom: 30px;
                    `}
                >
                    다른 사람이 만든 뱃지를 보자!
                </h1>
                <Button>
                    <Link to="/badge-forum"> 뱃지 게시판</Link>
                </Button>
            </Box>
            <Box image={deleteImage} /* col="3" */>
                <h1
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 1.5rem;
                        font-weight: 900;
                        margin-bottom: 30px;
                    `}
                >
                    내가 만든 뱃지를 관리하자!
                </h1>
                <Button>뱃지 수정/삭제</Button>
            </Box>
        </div>
    );
}
