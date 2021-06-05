import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 102vw;
    min-width: var(--min-width);
    max-width: var(--max-width);
    height: 7vh;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid var(--primary-color);
    margin-bottom: 1rem;
    .logo {
        height: 55px;
        margin: auto 0 auto 3rem;
        text-align: center;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding-right: 1rem;
        margin-right: 1rem;
        background: white;
        li {
            margin: 6px;
            margin-right: 5px;
            line-height: 2rem;
            &:hover {
                border-bottom: 1px solid var(--primary-color);
            }
        }
        .hamburger {
            margin-top: calc((7vh - 40px) / 2);
            display: block;
            line-height: 20px;
            height: 30px;
            width: 30px;
            border: none;
            background: none;
            color: var(--primary-color);
        }
        .closed {
            position: absolute;
            margin-top: 20px;
            top: -1000px;
            animation: menu 0.3s initial backwards;
        }
        .open {
            position: absolute;
            margin-top: calc(7vh + 3px);
            right: 7px;
            animation: menu 0.3s forwards;
            background: white;
            padding: 5px;
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
            <img src="/flamingo-logo60px.png" className="logo" />
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
                        <a href="https://www.instagram.com/flamingo.seitai.misa/?igshid=fb5c688pdmxe" target="_blank">
                            Instagram
                            <AiOutlineInstagram id="insta-icon" />
                        </a>
                    </li>
                </div>
            </ul>
        </StyledNav>
    );
}
