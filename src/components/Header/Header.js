import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import IconHamburger from "../IconHamburger/IconHamburger";
import "./Header.css";
import PopupMenu from "../PopupMenu/PopupMenu";

function Header(props) {
  const [scroll, setScroll] = useState(0);
  const [showPopupMenu, setshowPopupMenu] = useState(false);
  const [showIconHamburger, setShowIconHamburger] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setshowPopupMenu(false);
      }
    }

    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [showPopupMenu])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setshowPopupMenu(false);
    }
  }

  function handleClick() {
    setshowPopupMenu(true);
  };

  function handleClose() {
    setshowPopupMenu(false);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  //  const handleUpButton = () => {
  //   window.scrollTo(0, 0);
  // };


  return (
    <header className={scroll > 75 ? "header__background" : `header ${props.headerCustom}`}>
      <Link to="/" className="logo header__logo opacity"></Link>
      <Navigation
        customNavigation='header__navigation'
      />
      {/* <div className="test" onClick={handleClose} /> */}
      {/* <button
        className="header__close-button"
        onClick={handleClose}
      >
        x
      </button> */}
      <nav className={`header__links ${props.headerCustomLinks}`}>
        <NavTab
          customNavTab={`header__navtab ${props.customHeaderNavTab}`}
        />
        {/* {props.children} */}
        <a className="header__lang opacity">KG</a>
        <IconHamburger
          customIconHamburger='header__icon-hamburger'
          onClick={handleClick}
        />
        {
          showPopupMenu
          && <PopupMenu
            onClick={handleClose}
            handleOverlay={handleOverlay}
          />
        }
      </nav>
    </header>
  );
}

export default Header;
