import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 80px;
    height: 45px;
    border-radius: 7px;
    background: var(--button);
    border: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    color: white;
    a {
        display: block;
        padding: auto;
        color: white;
    }
    &:hover,
    &:focus {
        background: var(--button-active);
    }
`;

export default function Button({ type = 'button', children }) {
    return <StyledButton type={type}>{children}</StyledButton>;
}
