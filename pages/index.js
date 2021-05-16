import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";

export default function index() {
  return (
    <Layout>
      <Head>
        <title>flamingo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
      </Head>

      <section>
        {/* this is how an image is done <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <p>整体　筋膜リリース</p>
        <h1>flamingo</h1>
        <p>
          羽ばたきたくなる身体に… オールハンドで身体を気持ちよく整えます。
          心地よい身体になってあなただけの人生を 思いっきり楽しんでほしい…
          そんな想いで施術をします。
        </p>
        <Image src="/feather.png" alt="" width={100} height={100} />
      </section>
    </Layout>
  );
}
