import React from "react";
import './Hero.css';

function Hero () {
  return(
    <section className="hero">
      <main className="hero__container">
        <h1 className="hero__title">Государственное учреждение</h1>
        <h2 className="hero__subtitle">
          "Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики
        </h2>
        <div className="hero__buttons">
          <button className="hero__button"></button>
          <button className="hero__button"></button>
        </div>
      </main>
    </section>
  )
}

export default Hero