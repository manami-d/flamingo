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
        height: 45vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/topimage.jpg');
        display: flex;
        justify-content: center;
        align-items: center;
        .hero-content {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            background: rgb(14 4 4 / 28%);
            padding: 1.5rem;
            color: #dedede;
            p,
            h1 {
                text-align: center;
            }
            h1 + p {
                font-size: 0.8em;
            }
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
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(0 0 0 / 50%);
                /* z-index: 5; */
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
            .card-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                background-size: cover;
                background-position: left center;
                background-repeat: no-repeat;
                p {
                    width: 90%;
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
        .card-wrapper {
            .inner-wrapper {
                position: relative;
                color: white;
                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgb(0 0 0 / 50%);
                    /* z-index: 5; */
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
                .card-content {
                    /* background: none !important; */
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
            }
            .card-image {
                display: none !important;
            }
        }
    }
    @media only screen and (min-width: 1000px) {
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
