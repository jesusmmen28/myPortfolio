import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="titleHeader">
        <Link className="linkTituloPrincipal" to={"/"}>
          JM Portafolio
        </Link>
      </h1>
      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;


