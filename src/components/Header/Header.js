import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import IconHamburger from "../IconHamburger/IconHamburger";
import "./Header.css";

function Header(props) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  //  const handleUpButton = () => {
  //   window.scrollTo(0, 0);
  // };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scroll > 75 ? "header__background" : `header ${props.headerCustom}`}>
      <Link to="/" className="logo header__logo opacity"></Link>
      <Navigation
        customNavigation='header__navigation'
      />
      <div className={`header__links ${props.headerCustomLinks}`}>
        <NavTab 
          customNavTab='header__navtab'
        />
        {/* {props.children} */}
        <a className="header__lang opacity">KG</a>
        <IconHamburger
          customIconHamburger='header__icon-hamburger'
          // onClick={handleClick}
        />
      </div>
    </header>
  );
}

export default Header;
