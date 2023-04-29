import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./PriceListItem.css";

function PriceListItem({title, marka1, marka2, CustomLink}) {
  return (
    <Link to="/" className="price-list-item">
      <div className="price-list-item__description">
        <h3 className="price-list-item__subTitle">{title}</h3>
        <p className="price-list-item__text">
          {marka1} <br />
          {marka2}
        </p>
      </div>
      <div className={`price-list__child ${CustomLink}`}></div>
    </Link>
  );
}

export default PriceListItem;