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
    box-shadow: 0px 3px 0 #9c9c9c;
    margin-bottom: 1rem;
    .logo {
        width: 12.5rem;
        height: 100%;
        margin-left: 3rem;
        // just until we have a logo to display
        color: white;
        background: black;
        text-align: center;
        line-height: 7vh;
    }
    ul {
        width: 70vw;
        height: 100%;
        border: 1px solid red;
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
            <p className="logo">LOGO</p>
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
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                </li>
                <li>
                    {' '}
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    {' '}
                    {/* <a href="https://www.instagram.com/flamingo.seitai.misa/?igshid=fb5c688pdmxe"> */}
                    <a href="#">
                        Instagram
                        <AiOutlineInstagram id="insta-icon" />
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
}
