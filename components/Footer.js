import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100vw;
    max-width: 1480px;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>Copyright Flamingo.co &copy; 2021</p>
        </StyledFooter>
    );
}
