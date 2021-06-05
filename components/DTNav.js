import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100vw;
    max-width: 1480px;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid var(--primary-color);
    margin-bottom: 1rem;
    .logo {
        height: 55px;
        margin: auto 0 auto 3rem;
        text-align: center;
    }
    ul {
        width: 70vw;
        height: 100%;
        margin-left: auto;
        margin-right: 3rem;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export default function Navbar() {
    return (
        <StyledNav>
            <img src="/flamingo-logo60px.png" className="logo" />

            <ul>
                <li>
                    {' '}
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    {' '}
                    <a href="/flamingo-menu.pdf" download>
                        Menu
                    </a>
                </li>
                <li>
                    {' '}
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    {' '}
                    <a href="https://www.instagram.com/flamingo.seitai.misa/?igshid=fb5c688pdmxe" target="_blank">
                        Instagram
                        <AiOutlineInstagram id="insta-icon" />
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
}
