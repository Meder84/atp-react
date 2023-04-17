import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../NavLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import "./Header.css";

function Header(props) {
  return (
    <header className={`header ${props.headerCustom}`}>
      <Link to="/" className="logo header__logo opacity"></Link>
      <Navigation />

      <div className={`header__links ${props.headerCustomLinks}`}>
        <NavTab />
        {props.children}
      </div>
    </header>
  );
}

export default Header;
