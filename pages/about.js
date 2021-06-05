import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';
import { page } from '../styles/GlobalStyled';
import styled from 'styled-components';

const StyledAbout = styled(page)`
    text-align: center;
    .about-wrapper {
        display: flex;
        flex-wrap: wrap;
        min-height: calc(90vh -1rem);
        width: 100vw;
        max-width: var(--max-width);
        margin: 1rem auto;

        article {
            min-width: 300px;
            width: 100vw;
            min-height: 30vh;

            background: white;
            margin: 2.5rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .about-image {
                margin: 0 2rem;

                img {
                    object-fit: cover;
                    height: 35vh;
                    width: 90vw;
                    min-width: 280px;
                    max-width: 700px;
                    min-height: 300px;
                    max-height: 500px;
                }
                /* background: grey; */
            }
            .about-content {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 90vw;
                min-height: 400px;
                min-width: 280px;
                max-width: 700px;
                height: auto;
                margin: 0 2rem;
                background: var(--primary-opaque);
                h2 {
                    text-align: center;
                    /* font-size: 2rem; */
                }
                p {
                    /* line-height: 1.4rem; */
                    text-align: left;
                    margin: 1rem 2.5rem;
                    min-width: 280px;
                }
            }
        }
    }
    @media only screen and (min-width: 600px) {
        article {
            flex-direction: row;
            .about-content {
                width: 65vw;
            }
            .about-image {
                margin: 2.5rem;
                width: 30vw;
                img {
                    object-fit: cover;
                    height: 50vh;
                    width: 35vw;
                }
            }
        }
    }
`;

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
            </Head>
            <StyledAbout>
                <h1>About flamingo</h1>
                <div className="about-wrapper">
                    <article>
                        <div className="about-image">
                            <img src="/salon1.jpg" alt="Salon room" loading="lazy" />
                        </div>
                        <div className="about-content">
                            <h2>当サロンについて</h2>
                            <p>
                                当サロンでは筋膜リリースという手技を取り入れ、オールハンドでそれぞれのお身体に合わせたコースとご提供いたします。
                                <br />
                                凝り固まった筋肉にアプローチをし、その場限りでない施術をお届けします。
                                <br />
                                自宅の一室で行う完全プライベートサロンです。たくさんお話をしていただくのも、ゆっくりお休みなっていただくのも大歓迎です。
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className="about-image">
                            {/* michan photo */}
                            <img src="/salon1.jpg" alt="Salon room" loading="lazy" />
                        </div>
                        <div className="about-content">
                            <h2>セラピストについて</h2>
                            <p>
                                私自身が激務な毎日で苦しさを経験したからこそ、おひとりおひとりの身体と心に丁寧に向き合います。
                                <br />
                                あなたの毎日を快適にしたい、好きをずっと大好きでいたれるよう、まずは身体を整えましょう。
                                <br /> 心と身体は密接につながっています。
                                <br />
                                筋膜にアプローチをすることで筋肉のこわばりをほぐし、いっぱい頑張っているあなたの身体を褒めて整える手助けをさせてください。
                                <br /> 身体の声を聴く。
                                <br />
                                日々忙しく過ごされている中で、たまに訪れる不調の悲鳴を感じたことはありますか？ 私は、家事仕事ワンオペ育児によって身体を壊した経験があります。
                                <br />
                                だからこそあなたに同じ思いをしてほしくない。
                                <br /> 身体の声を聴いて、やわらげて、楽を手に入れる。 私にそのお手伝いをさせてください。
                            </p>
                        </div>
                    </article>
                </div>
            </StyledAbout>
        </Layout>
    );
}
