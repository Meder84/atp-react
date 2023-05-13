import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "../About/About";
import Counts from "../Counts/Counts";
import PriceList from "../PriceList/PriceList/PriceList";
import Armored from "../PriceList/Armored/Armored";
import Representative from "../PriceList/Representative/Representative";
import Passengers from "../PriceList/Passengers/Passengers";
import Minibuses from "../PriceList/MiniBuses/MiniBuses";
import Buses from "../PriceList/Buses/Buses";
import Tracks from "../PriceList/Tracks/Tracks";
import Repair from "../Repair/Repair/Repair";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Route path="/price-list">
        <Header headerCustom="app__header" />
        <PriceList />
        <Footer />
      </Route>
      <Route path="/repair">
        <Header headerCustom="app__header" />
        <Repair />
        <Footer />
      </Route>
      <Route path="/armored">
        <Header headerCustom="app__header" />
        <Armored />
        <Footer />
      </Route>
      <Route path="/representative">
        <Header headerCustom="app__header" />
        <Representative />
        <Footer />
      </Route>
      <Route path="/passengers">
        <Header headerCustom="app__header" />
        <Passengers />
        <Footer />
      </Route>
      <Route path="/mini-buses">
        <Header headerCustom="app__header" />
        <Minibuses />
        <Footer />
      </Route>
      <Route path="/buses">
        <Header headerCustom="app__header" />
        <Buses />
        <Footer />
      </Route>
      <Route path="/tracks">
        <Header headerCustom="app__header" />
        <Tracks />
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
      <Route path="/signup">
        <Register
          // handleRegister={handleRegister}
          // message={message}
          // resetMessage={resetMessage}
        />
      </Route>
      <Route path='/signin'>
        <Login />
      </Route>
    </section>
  );
}

export default Main;
