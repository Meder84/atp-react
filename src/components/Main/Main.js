import React from "react";
// import Promo from '../Promo/Promo';
// import AboutProject from '../AboutProject/AboutProject';
// import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function Main({loggedIn}) {

  return (
    <main className="main">
      <Header />
      <Hero />
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
