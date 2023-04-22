import React from "react";
import smile from '../../images/iconSmile.png';
import iconOperator from '../../images/iconOperator.png';
import iconEmployee from '../../images/iconEmployee.png';
import iconCars from '../../images/iconCars.png';
import './Counts.css';

function Counts() {

  return (
    <section className="counts">
      <main className="counts__wrapper">
        <ul className="counts__list">
          <li className="counts__item">
            <img src={smile} alt="" className="counts__icon" />
            <span className="counts__numbers"></span>
            <p className="counts__text"></p>
          </li>
          <li className="counts__item">
            <img src={iconOperator} alt="" className="counts__icon" />
            <span className="counts__numbers"></span>
            <p className="counts__text"></p>
          </li>
          <li className="counts__item">
            <img src={iconEmployee} alt="" className="counts__icon" />
            <span className="counts__numbers"></span>
            <p className="counts__text"></p>
          </li>
          <li className="counts__item">
            <img src={iconCars} alt="" className="counts__icon" />
            <span className="counts__numbers"></span>
            <p className="counts__text"></p>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Counts;
