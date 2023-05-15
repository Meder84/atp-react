import React, { useState, useEffect } from "react";
import IconHamburger from "../IconHamburger/IconHamburger";
import PopupMenu from "../PopupMenu/PopupMenu";
import Account from "../Account/Account";
import { NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ customNavigation }) {
  const [showPopupMenu, setshowPopupMenu] = useState(false);

  // useEffect(() => {
  //   const closeByEscape = (e) => {
  //     if (e.key === "Escape") {
  //       setshowPopupMenu(false);
  //     }
  //   };

  //   document.addEventListener("keydown", closeByEscape);
  //   return () => document.removeEventListener("keydown", closeByEscape);
  // }, [showPopupMenu]);

  // const handleOverlay = (e) => {
  //   if (e.target === e.currentTarget) {
  //     setshowPopupMenu(false);
  //   }
  // };

  // function handleClick() {
  //   setshowPopupMenu(true);
  // }

  // function handleClose() {
  //   setshowPopupMenu(false);
  // }

  return (
    <nav className={`navigation ${customNavigation}`}>
      <ul className="navigation__links">
        <li className="navigation__link">
          <CustomLink
            to="/"
            customNavigationLink="navigation__content"
            text="Главная"
          />
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/about"
            customNavigationLink="navigation__content"
            text="О нас"
          />
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/price-list"
            customNavigationLink="navigation__content"
            text="Аренда"
          />
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/repair"
            customNavigationLink="navigation__content"
            text="Ремонт"
          />
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/gallery"
            customNavigationLink="navigation__content"
            text="Галерея"
          />
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/vacancies"
            customNavigationLink="navigation__content"
            text="Вакансии "
          />
        </li>
      </ul>
      {/* <NavLink to='/profile'
        activeClassName="menu__link-active"
        className='navigation__account-container'>
        <Account
          customSubtitleAccount={customSubtitleAccount}
        />
      </NavLink> */}
      {/* <IconHamburger
        customIconHamburger="navigation__icon-hamburger"
        onClick={handleClick}
      />
      {showPopupMenu && (
        <PopupMenu handleClose={handleClose} handleOverlay={handleOverlay} />
      )} */}
    </nav>
  );
}

export default Navigation;
