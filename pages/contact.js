import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../components/Button';
import { page } from '../styles/GlobalStyled';
import styled from 'styled-components';

const StyledContact = styled(page)`
    .contact-form {
        margin: 2.5rem auto;
        fieldset {
            margin: 0 auto;
            min-height: 400px;
            height: 75vh;
            max-width: 600px;
            min-width: 280px;
            width: 80vw;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            border: none;
            legend {
                text-align: center;
                h1 {
                    font-size: 1.8rem;
                    letter-spacing: 2px;
                }
            }
            .label-wrapper {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                min-width: 275px;
                &:focus-within {
                    #form-message,
                    label {
                        color: #54a7b3;
                    }
                }
            }

            label {
                display: block;
                width: 150px;
                margin-left: auto;
                margin-right: 2rem;
                margin-bottom: 5px;
                text-align: left;
                min-width: 280px;
                max-width: 400px;
            }
            input {
                padding: 0 7px;
                height: 2rem;
            }
            #form-message {
                padding: 13px;
                height: 10rem;
            }
            #form-message,
            input {
                min-width: 280px;
                max-width: 400px;
                margin: 0 2rem 0 auto;
                border: none;
                border-radius: 7px;
                box-shadow: 2px 2px 4px #b3afaf, -2px -2px 4px #b3afaf;
            }
        }
        .contact-notification.success,
        .contact-notification.error {
            position: fixed;
            left: clamp(2vw, 4.5vw, 500px);
            top: 6vh;
            display: flex;
            width: clamp(280px, 90vw, 600px);
            height: auto;
            z-index: 5;
            padding: 5px;
            p{
                text-align: center;
                margin: 0 auto

            }
            .message-close {
                position: absolute;
                top: -10px;
                right: -10px;
                border: 2px solid white;
                background: var(--button);
                fill: white;
                border-radius: 50%;
                height: 1.5rem;
                width: 2.5rem;
                &:hover {
                    fill: black;
                }
            }
        }
        .contact-notification.success {
            border: 2px solid var(--button-border);
            background: var(--button);
            color: white;
        }
        .contact-notification.error {
            height: 5rem;
            border: 2px solid var(--button-border);
        }
    }

    @media only screen and (min-width: 400px) {
        .contact-notification.success,
        .contact-notification.error {
            left: 5vw !important;
        }
    }

    @media only screen and (min-width: 600px) {
        .contact-notification.success,
        .contact-notification.error {
            left: 7vw !important;
        }
        label {
            min-width: initial !important;
            max-width: 150px !important;
            margin: 0 auto !important;
        }
    }
`;

export default function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(true);
    const [notification, setNotification] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            name,
            email,
            message
        };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received', res);
            if (res.status === 200) {
                console.log('Response succeeded!');
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.log('Response failed!');
                setSubmitted(false);
            }
        });

        console.log('formValues: ', name, email, message);
    };

    return (
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
            </Head>
            <StyledContact>
                <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                    {notification && (
                        <div className={`contact-notification ${submitted === true ? 'success' : 'error'}`}>
                            {submitted === true ? (
                                <p>
                                    Your message was sent! <br /> We will be in touch soon ✌️
                                </p>
                            ) : (
                                <p>
                                    Something went wrong, please try again or contact us by email at <a href="mailto:flamingo.seitai.misa@gmail.com">flamingo.seitai.misa@gmail.com</a> 👈
                                </p>
                            )}
                            <AiOutlineClose className="message-close" onClick={() => setNotification(null)} />
                        </div>
                    )}
                    <fieldset>
                        <legend>
                            <h1>お問い合わせフォーム</h1>
                        </legend>
                        <div className="label-wrapper">
                            <label htmlFor="name">お名前</label>
                            <input
                                name="name"
                                type="text"
                                id="form-name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                value={name}
                            />
                        </div>
                        <div className="label-wrapper">
                            <label htmlFor="email">メールアドレス</label>
                            <input
                                name="email"
                                id="form-email"
                                type="email"
                                autoComplete="true"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                            />
                        </div>
                        <div className="label-wrapper">
                            <label htmlFor="message">お問い合わせ内容</label>
                            <textarea
                                required
                                name="message"
                                id="form-message"
                                type="text"
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                value={message}
                            />
                        </div>
                        <Button type="submit">送信</Button>
                    </fieldset>
                </form>
            </StyledContact>
        </Layout>
    );
}
