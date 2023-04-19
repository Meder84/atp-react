import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../NavLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import "./Header.css";

function Header(props) {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () =>  {
    setScroll(window.scrollY);
  }

  //  const handleUpButton = () => {
  //   window.scrollTo(0, 0);
  // };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={scroll > 75 ? 'header__background' : `header ${props.headerCustom}`}>
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
