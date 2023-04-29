import React from "react";
import "./CustomLink.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function CustomLink({ to, custumNavigationLink, text }) {
  return (
    <NavLink
      to={to}
      className={`
      background-hover
      customLink
      opacity
      ${custumNavigationLink}
    `}
    >
      {text}
    </NavLink>
  );
}

export default CustomLink;
