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
    box-shadow: 0px 3px 0 var(--primary-color);
    margin-bottom: 1rem;
    .logo {
        width: 9.3rem;
        height: 60%;
        /* margin-left: 3rem; */
        margin: auto 0 auto 3rem;
        // just until we have a logo to display
        color: white;
        /* background: grey; */
        background-image: url('/brown-swatch50px.png');
        text-align: center;
        font-size: 1.5rem;
        line-height: 4vh;
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
            <i className="logo cursive">flamingo</i>
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
