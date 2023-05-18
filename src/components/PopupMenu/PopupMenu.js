import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

import './PopupMenu.css';

function PopupMenu(props) {

  return (
    <div
      className="popup-menu"
      onClick={props.handleOverlay}
    >
      <div className='popup-menu__wrapper'>
        <button
          className="popup-menu__btn-close opacity"
          onClick={props.handleClose}
        />
        <Header 
          headerCustom='popup-menu__header'
          customIconHamburger='popup-menu__icon-hamburger'
        />
        <div className="popup-menu__container">
          <NavTab />
          <div className='popup-menu__links' >
            <Navigation 
              customNavigationLinks="popup-menu__navigation-links"
            />
          </div>


          <NavLink to="/profile"
            activeClassName="popup-menu__link-active"
            className="popup-menu__link-profile opacity"
          >
            <Account />
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default PopupMenu;
