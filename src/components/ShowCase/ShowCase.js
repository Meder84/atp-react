import React from "react";
import './ShowCase.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ShowCase() {
  return(
    <section className="showCase">
      <main className="showCase__wrapper">
        <h2 className="showCase__title">Чем мы занимаемся?</h2>
        <div className="showCase__items">
          <Link to="/" className="showCase__item showCase__lease">
            <div className="showCase__description">
              <h3 className="showCase__subTitle">Аренда авто</h3>
              <p className="showCase__text">Предоставление разного вида и класса авто для аренды</p>
            </div>
          </Link>
          <Link to="/" className="showCase__item showCase__repair">
            <div className="showCase__description">
              <h3 className="showCase__subTitle">Ремонт авто</h3>
              <p className="showCase__text">Ремонт и обслуживание различного вида и класса авто (от лекговых до грузовых)</p>
            </div>
          </Link>
          <Link to="/" className="showCase__item showCase__transport-support">
            <div  className="showCase__description">
              <h3 className="showCase__subTitle">Транспортное обеспечение</h3>
              <p className="showCase__text">Обеспечение транспортом различных структур Кыргызской Республики</p>
            </div>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default ShowCase;
