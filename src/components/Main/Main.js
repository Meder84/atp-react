import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ShowCase from "../ShowCase/ShowCase";
import About from "../About/About";
import Counts from "../Counts/Counts";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import Card from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import "./Main.css";
import FooterCopyright from "../FooterCopyright/FooterCoptright";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function Main({ loggedIn }) {
  return (
    <main className="main">
      <Header />
      <Hero />
      <ShowCase />
      <About />
      <Counts />
      <Services />
      <Route path='/gallery'>
        <Gallery />
      </Route>
      <Carousel />
      <Team />
      <Footer />
      <FooterCopyright />
      {/* <Promo
        loggedIn={loggedIn}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer /> */}
    </main>
  );
}

export default Main;
