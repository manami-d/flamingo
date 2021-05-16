import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/menu">
        <a>Menu</a>
      </Link>
      <a href="https://www.instagram.com/flamingo.seitai.misa/?igshid=fb5c688pdmxe">
        Instagram
        <i class="fab fa-instagram"></i>
      </a>
    </nav>
  );
}
