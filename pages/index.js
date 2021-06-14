import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { page } from '../styles/GlobalStyled';
import Card from '../components/Card';
import Button from '../components/Button';
import Link from 'next/link';

const StyledIndex = styled(page)`
    .hero {
        height: 50vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            object-fit: cover;
            height: 50vh;
            min-width: 300px;
            max-width: 800px;
            position: relative;
        }

        .hero-content {
            position: absolute;
            display: flex;
            flex-direction: column;
            max-width: 400px;
            background: var(--primary-opaque);
            padding: 1.5rem;
            z-index: 3;

            p,
            h1 {
                text-align: center;
            }
            h1 + p {
                font-size: 0.8em;
            }
            /* &:after {
                content: '';
                width: 100px;
                height: 100px;
                position: absolute;
                z-index: 99;
                left: 0;
                top: 0;
                background: black;
            } */
        }
    }
    .card-wrapper {
        margin: 2.5rem auto;

        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        height: auto;

        .inner-wrapper {
            display: flex;
            position: relative;
            color: white;
            width: 100%;
            height: 100%;

            p,
            button,
            .button-link {
                z-index: 5;
            }

            .card-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                background-size: cover;
                background-position: left center;
                background-repeat: no-repeat;
                p {
                    width: 100%;
                    height: 4.5rem;
                    margin: 0;
                    padding-top: 1rem;
                    background: #f3dabf;
                    color: var(--font-color);
                }
                .button-link {
                    display: block;
                    padding: auto;
                    color: white;
                    margin-bottom: 16px !important;
                }
            }
            #card1 {
                background-image: url('/lady2.jpg') !important;
            }
            #card2 {
                background-image: url('/footbath.jpg') !important;
            }
            #card3 {
                background-image: url('/salon3.jpg') !important;
            }
            .card-image {
                display: none;
                height: 100%;
                width: 100%;
                object-fit: cover;
                img {
                    border-radius: 7px;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

    @media only screen and (min-width: 400px) {
        .card-wrapper {
            .inner-wrapper {
                color: black;
                &:after {
                    content: none;
                }
                &:hover {
                    &:after {
                        background: none;
                    }
                    p {
                        background: inherit;
                    }
                }
                .card-content {
                    background: white;
                    p {
                        background: white;
                    }
                }

                #card1,
                #card2,
                #card3 {
                    background-image: none !important;
                }
            }
            .card-image {
                display: block !important;
            }
        }
    }

    @media only screen and (min-width: 880px) {
        .hero {
            z-index: 1;
            /* max-width: var(--max-width); */
            height: calc(100vh - 70px);
            top: 70px;
            overflow: hidden;
            .hero-content {
                top: 20%;
                right: 10%;
                max-width: initial;
                width: 40vw;
                font-size: 1.3rem;
                h1 {
                    font-size: 4rem;
                }
            }
            img {
                all: initial !important;
                position: relative;
                top: 70px;
                object-fit: cover;
                max-width: var(--max-width);
                min-height: calc(100vh - 70px);
                z-index: 1;
                top: 0;
            }
        }
        .card-wrapper {
            z-index: 3;
            width: 50vw;
            max-width: calc(var(--max-width) / 2);
            min-width: 400px;
            position: absolute;
            height: 90vh;
            top: 5vh;
            left: 0;

            article {
                z-index: 3;
                min-width: 350px;
                margin: 1rem 10vw;
                height: 25vh;
            }
            .inner-wrapper {
                z-index: 3;
                position: relative;
                & > * {
                    border: none !important;
                }
                .card-image {
                    position: absolute;
                    width: 100%;
                    height: 16vh;
                    top: 25%;
                    left: 0;
                    z-index: 3;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .card-content {
                    position: absolute;
                    height: 12vh;
                    z-index: 4;
                    background: none;
                    p {
                        background: white;
                        width: 100%;
                        margin-bottom: 2rem;
                    }
                }
                p,
                button,
                .button-link {
                    z-index: 5;
                }
                &:hover {
                    color: black;
                    &:after {
                        background: none;
                    }
                    p {
                        background: rgba(116, 112, 112, 0.45);
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 1000px) {
        position: relative;
        .hero {
            display: flex;
            justify-content: center;
            .hero-content {
                right: initial !important;
            }
        }
        .card-wrapper {
            position: absolute;
            min-width: 1000px;
            width: 100%;
            max-width: var(--max-width);
            height: 400px;
            top: 50vh;
            left: 0;

            article {
                margin: 0 auto !important;
                min-width: 300px !important;
                height: 100%;
                position: relative;
                img {
                    height: 225px !important;
                    position: absolute;
                    /* top: 40%; */
                }
            }
            .inner-wrapper {
                color: black;
                &:after {
                    content: none;
                }
                &:hover {
                    &:after {
                        background: none;
                    }
                    p {
                        background: inherit;
                    }
                }
                .card-content {
                    background: white;
                    p {
                        margin-bottom: 0;
                    }
                }

                #card1,
                #card2,
                #card3 {
                    background-image: none !important;
                }
            }
            .card-image {
                display: block !important;
            }
        }
    }
`;

export default function index() {
    return (
        <Layout>
            <Head>
                <title>flamingo</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
            </Head>

            <StyledIndex>
                {/* this is how an image is done <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}

                <div className="hero">
                    <img src="/stones-on-beach-L.png" alt="calming picture of stones on beach" />
                    <div className="hero-content">
                        <p>整体　筋膜リリース</p>
                        <h1 className="cursive">flamingo</h1>
                        <p>
                            羽ばたきたくなる身体に… <br />
                            オールハンドで身体を気持ちよく整えます。
                            <br /> 心地よい身体になってあなただけの人生を 思いっきり楽しんでほしい… <br />
                            そんな想いで施術をします。
                        </p>
                    </div>
                </div>

                <div className="card-wrapper">
                    <Card link="/about" linkDesc="about">
                        <div className="inner-wrapper">
                            <div className="card-image">
                                <img src="/lady2.jpg" alt="an image of a lady preparing for massage" />
                            </div>
                            <div className="card-content" id="card1">
                                <p>当サロンflamingoについて。</p>
                                <a className="button-link" href="/about">
                                    <Button>About</Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="inner-wrapper">
                            <div className="card-image">
                                <img src="/footbath.jpg" alt="an image of a footbath with feet present " />
                            </div>
                            <div className="card-content" id="card2">
                                <p>メニューはこちらからご覧いただけます。</p>

                                <a className="button-link" href="/flamingo-menu.pdf" download>
                                    <Button>Menu</Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="inner-wrapper">
                            <div className="card-image">
                                <img src="/salon3.jpg" alt="Image of the Salon that the massages will be done in" />
                            </div>
                            <div className="card-content" id="card3">
                                <p>お問合わせはこちら。</p>
                                <a className="button-link" href="/contact">
                                    <Button>Contact</Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* <Image src="/feather.png" alt="" width={100} height={100} /> */}
            </StyledIndex>
        </Layout>
    );
}
