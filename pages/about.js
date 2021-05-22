import React from "react";
import Image from "next/image";
import Layout from "../components/layout";

export default function about() {
  return (
    <Layout>
      <h1>About</h1>
      <Image src="/salon1.jpg" alt="Salon room" width={500} height={500} />
      <h2>当サロンについて</h2>
      <p>
        当サロンでは筋膜リリースという手技を取り入れ、オールハンドでそれぞれのお身体に合わせたコースとご提供いたします。
        凝り固まった筋肉にアプローチをし、その場限りでない施術をお届けします。
        自宅の一室で行う完全プライベートサロンです。たくさんお話をしていただくのも、ゆっくりお休みなっていただくのも大歓迎です。
      </p>
      <h2>セラピストについて</h2>
      <p>
        私自身が激務な毎日で苦しさを経験したからこそ、おひとりおひとりの身体と心に丁寧に向き合います。
        あなたの毎日を快適にしたい、好きをずっと大好きでいたれるよう、まずは身体を整えましょう。
        心と身体は密接につながっています。
        筋膜にアプローチをすることで筋肉のこわばりをほぐし、いっぱい頑張っているあなたの身体を褒めて整える手助けをさせてください。
        身体の声を聴く。
        日々忙しく過ごされている中で、たまに訪れる不調の悲鳴を感じたことはありますか？
        私は、家事仕事ワンオペ育児によって身体を壊した経験があります。
        だからこそあなたに同じ思いをしてほしくない。
        身体の声を聴いて、やわらげて、楽を手に入れる。
        私にそのお手伝いをさせてください。
      </p>
    </Layout>
  );
}
