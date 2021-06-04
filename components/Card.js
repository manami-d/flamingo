import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
    height: 20vh;
    max-height: 550px;
    min-height: 200px;
    min-width: 280px;
    width: 80vw;
    max-width: 600px;
    margin: 1rem auto;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 3px 3px 6px #d3d3d3, -3px -3px 6px #ededed;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 17px;
    p {
        width: 80%;
        margin: 1rem auto;
        text-align: center;
        line-height: 2.4rem;
        font-size: 1.5rem;
    }
    @media only screen and (min-width: 880px) {
        max-width: 280px;
        margin: 1rem auto;
    }
    @media only screen and (min-width: 1000px) {
        max-width: 330px;
        margin: 1rem auto;
    }
`;

export default function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}
