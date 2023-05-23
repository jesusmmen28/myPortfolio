import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <RxHamburgerMenu className="menuHamburguesa" />
      </div>
      <ul className="menu-items">
        <li>
          <Link className="linkMenu" to={"/"} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link className="linkMenu" to={"/sobre-mi"} onClick={closeMenu}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link className="linkMenu" to={"/proyectos"} onClick={closeMenu}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link className="linkMenu" to={"/contacto"} onClick={closeMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;


