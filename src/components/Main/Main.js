import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "../About/About";
import Counts from "../Counts/Counts";
import "./Main.css";
import PriceList from "../PriceList/PriceList/PriceList";

function Main() {

  return (
    <section className="main">
      <Route path="/price-list">
        <Header headerCustom="app__header" />
        <PriceList />
        <Footer />
      </Route>
      <Route path="/gallery">
        <Header headerCustom="app__header" />
        <Gallery />
        <Footer />
      </Route>
      <Route path="/about">
        <Header headerCustom="app__header" />
        <About />
        <Counts />
        <Footer />
      </Route>
    </section>
  );
}

export default Main;

