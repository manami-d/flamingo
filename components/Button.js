import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 90px;
    height: 50px;
    font-size: 1rem;
    border-radius: 7px;
    background: var(--button-bg);
    border: none;
    display: flex;
    margin: 0 auto;
    padding: 0 15px;
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    border: 2px solid var(--button-border);
    /* font-family: 'Hachi Maru Pop', cursive; */
    a {
        display: block;
        padding: auto;
        color: white;
    }
    &:hover,
    &:focus {
        background: var(--button-bg-hover);
        border-color: var(--primary-opaque);
    }
`;

export default function Button({ type = 'button', children }) {
    return <StyledButton type={type}>{children}</StyledButton>;
}
