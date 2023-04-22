import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowCase from "../ShowCase/ShowCase";
import About from "../About/About";
import Counts from "../Counts/Counts";
import './Main.css';

function Main({loggedIn}) {

  return (
    <main className="main">
      <Header />
      <Hero />
      <ShowCase />
      <About />
      <Counts />
      {/* <Promo
        loggedIn={loggedIn}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer /> */}
    </main>
  )
}

export default Main;
