import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
    overflow: hidden;
    height: 30vh;
    max-height: 350px;
    min-height: 200px;
    min-width: 280px;
    width: 100%;
    max-width: 80vw;
    margin: 1rem auto;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
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
        line-height: 1.8rem;
        font-size: 1rem;
    }
    @media only screen and (min-width: 450px) {
        height: 25vh;
        width: 600px;
    }
    @media only screen and (min-width: 650px) {
        /* width: 600px; */
        /* max-width: 80vw; */
        margin: 1rem 20%;
    }
    @media only screen and (min-width: 880px) {
        height: 30vh;

        width: 30%;
        min-width: 280px;
        max-width: 320px;
        margin: 1rem auto;
    }
    @media only screen and (min-width: 1000px) {
        max-width: 400px;
        margin: 1rem auto;
    }
`;

export default function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}
