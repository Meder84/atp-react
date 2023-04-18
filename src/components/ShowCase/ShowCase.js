import React from "react";
import './ShowCase.css';

function ShowCase() {
  return(
    <section className="showCase">
      <main className="showCase__wrapper">
        <h2 className="showCase__title">Чем мы занимаемся?</h2>
        <ul className="showCase__items showCase__lease">
          <li className="showCase__item">
            <a className="showCase__link">Аренда авто</a>
            <p className="showCase__text">Предоставление разного вида и класса авто для аренды</p>
          </li>
          <li className="showCase__item showCase__repair">
            <a className="showCase__link">Ремонт авто</a>
            <p className="showCase__text">Ремонт и обслуживание различного вида и класса авто (от лекговых до грузовых)</p>
          </li>
          <li className="showCase__item showCase__transport-support">
            <a className="showCase__link">Транспортное обеспечение</a>
            <p className="showCase__text">Обеспечение транспортом различных структур Кыргызской Республики</p>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default ShowCase;
