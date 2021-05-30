import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.article`
    height: 20vh;
    max-height: 500px;
    min-height: 200px;
    width: 300px;

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
        margin: 0 auto;
    }
`;

export default function Card() {
    return (
        <StyledCard>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae tempore, velit corporis sit laborum provident? Voluptas vero sunt possimus culpa?</p>
            <Button>
                <Link href="#">word </Link>
            </Button>
        </StyledCard>
    );
}
