import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowCase from "../ShowCase/ShowCase";
import About from "../About/About";
import Counts from "../Counts/Counts";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import Card from "../Cards/Cards";
import Carusel from '../Carousel/Carousel';
import './Main.css';

function Main({loggedIn}) {

  return (
    <main className="main">
      <Header />
      <Hero />
      <ShowCase />
      <About />
      <Counts />
      <Services />
      <Gallery />
      <Carusel />
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
