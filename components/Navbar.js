import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100vw;
    min-width: var(--min-width);
    max-width: var(--max-width);
    height: 7vh;
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
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
        /* margin-top: 7vh; */
        display: flex;
        flex-direction: column;
        list-style: none;
        border: 1px solid black;
        padding-right: 4rem;

        .hamburger {
            display: block;
            line-height: 20px;
            height: 20px;
            width: 15px;
            background: red;
        }
        .closed {
            position: absolute;
            margin-top: 20px;
            top: -1000px;
            animation: menu 0.3s initial backwards;
        }
        .open {
            position: absolute;
            margin-top: 20px;
            animation: menu 0.3s forwards;
        }
        @keyframes menu {
            from {
                top: -1000px;
            }
            to {
                top: 0px;
            }
        }
    }
`;

export default function Navbar() {
    const navList = useRef(null);
    const handleNav = () => {
        if (navList.current != null) {
            navList.current.classList.toggle('open');
            navList.current.classList.toggle('closed');
        }
    };
    return (
        <StyledNav>
            <i className="logo">LOGO</i>
            <ul>
                <li>
                    <button className="hamburger" onClick={() => handleNav()}>
                        {' '}
                        +=+
                    </button>
                </li>
                <div ref={navList} className="closed">
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
                </div>
            </ul>
        </StyledNav>
    );
}
