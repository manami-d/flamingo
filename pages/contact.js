import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../components/layout';
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
                /* border-width: 2px; */
                min-width: 280px;
                max-width: 400px;
                margin: 0 2rem 0 auto;
                border: none;
                border-radius: 7px;
                box-shadow: 2px 2px 4px #b3afaf, -2px -2px 4px #b3afaf;
            }
        }
    }
    @media only screen and (min-width: 600px) {
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

    const [submitted, setSubmitted] = useState(false);

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
                // setBody('');
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
                            />
                        </div>
                        <Button type="submit">送信</Button>
                    </fieldset>
                </form>
            </StyledContact>
        </Layout>
    );
}
