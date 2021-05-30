import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 75px;
    height: 30px;
    border-radius: 7px;
`;

export default function Button({ text, type = 'button', children }) {
    return <StyledButton type={type}>{children}</StyledButton>;
}
