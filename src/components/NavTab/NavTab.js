import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";

const NavTab = () => (
  <nav className="nav-tab">
    <Link
      to="/signup"
      className="
      nav-tab__signup 
      opacity 
      nav-tab__child
      background-hover"
    >
      Регистрация
    </Link>
    <Link
      to="/signin"
      className="
        nav-tab__signin 
        opacity 
        nav-tab__child
        background-hover"
    >
      Войти
    </Link>
    <a className="nav-tab__lang opacity">
      <span className="nav-tab__lang-text">KG</span>
    </a>
  </nav>
);

export default NavTab;
