import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../components/layout';
import Button from '../components/Button';
import styled from 'styled-components';

const StyledContact = styled.div`
    height: 90vh;
    width: 100vw;
    max-width: 1480px;
    min-width: 300px;
    .contact-form {
        /* height: 750px; */
        margin: 2.5rem auto;
        fieldset {
            min-height: 400px;
            height: 75vh;
            max-width: 500px;
            min-width: 280px;
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            box-shadow: 3px 3px 6px #d3d3d3, -3px -3px 6px #ededed;
            border: none;
            legend {
                h1 {
                    font-size: 1.8rem;
                    letter-spacing: 2px;
                }
                /* margin-bottom: 2rem; */
            }
            .label-wrapper {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin: 2rem 0;
                min-width: 275px;

                label {
                    display: block;
                    min-width: 75px;
                    max-width: 125px;
                    margin: 0 auto;
                    text-align: center;
                    /* margin-right: auto; */
                }
                input {
                    padding: 0 7px;
                    min-width: 240px;
                    max-width: 400px;
                    height: 2rem;
                    margin: 0 auto;
                    border-radius: 7px;
                    &:focus-within {
                        border: 1px solid pink;
                        background: #d4d4d4;
                    }
                }
            }
            #form-message {
                padding: 13px;
                height: 10rem;
                min-width: 240px;
                max-width: 400px;
                margin: 0 auto;
                border-radius: 7px;
                &:focus-within {
                    border: 1px solid pink;
                    background: #d4d4d4;
                }
            }
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
                <form class="contact-form" onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>
                            <h1>Contact Me</h1>
                        </legend>
                        <div className="label-wrapper">
                            <label htmlFor="name"> Name</label>
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
                            <label htmlFor="email"> Email</label>
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
                            <label htmlFor="message"> Message</label>
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
                        <Button type="submit">Submit</Button>
                    </fieldset>
                </form>
            </StyledContact>
        </Layout>
    );
}
