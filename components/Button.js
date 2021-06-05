import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100px;
    height: 65px;
    font-size: 1.2rem;
    border-radius: 7px;
    background: var(--button);
    border: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border: 3px solid var(--button-border);
    a {
        display: block;
        padding: auto;
        color: white;
    }
    &:hover,
    &:focus {
        color: #50B1A9;
        background: #ffffff;
    }
    @media only screen and (min-width: 880px) {
        width: 80px;
        height: 45px;
    }
`;

export default function Button({ type = 'button', children }) {
    return <StyledButton type={type}>{children}</StyledButton>;
}
