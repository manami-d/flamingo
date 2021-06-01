import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
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
    box-shadow: 0px 3px 0 var(--primary-color);
    margin-bottom: 1rem;
    .logo {
        width: 9.25rem;
        height: 60%;
        margin: auto 0 auto 3rem;
        // just until we have a logo to display
        background-image: url('/brown-swatch50px.png');
        text-align: center;
        font-size: 1.5rem;
        line-height: 4vh;
        color: white;
    }
    ul {
        /* margin-top: 7vh; */
        display: flex;
        flex-direction: column;
        list-style: none;

        padding-right: 4rem;
        li {
            margin: 5px;
            *:hover {
                border-bottom: 1px solid var(--primary-color);
            }
        }
        .hamburger {
            margin-top: calc((7vh - 60px) / 2);
            display: block;
            line-height: 20px;
            height: 60px;
            width: 60px;
            background: none;
            border: 1px solid #525050;
            border-radius: 7px;
        }
        .closed {
            position: absolute;
            margin-top: 20px;
            top: -1000px;
            animation: menu 0.3s initial backwards;
        }
        .open {
            position: absolute;
            margin-top: calc(7vh + 2px);
            animation: menu 0.3s forwards;
            background: white;
            padding: 1rem;
            box-shadow: 2px 2px 0 #9c9c9c;
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
            <i className="logo cursive">flamingo</i>
            <ul>
                <li>
                    <button className="hamburger" onClick={() => handleNav()}>
                        <AiOutlineMenu />
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
