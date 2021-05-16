import React from "react";
import Nav from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
