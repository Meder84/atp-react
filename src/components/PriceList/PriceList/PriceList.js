import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./PriceList.css";
import PriceListItem from "../PriceListItems/PriceListItems";

function PriceList() {
  const armored = 'Бронированные';
  const mercedesBens = 'MERCEDES BENS-222'
  const bmw760 = 'BMW-760lI'

  const representative = 'Представительские';
  const passengers = 'Легковые';
  const miniBuses = 'Микроавтобусы';
  const buses = 'Автобусы';
  const tracks = 'Грузовые';

  const caddilac = 'CADDILAC XTS 28T';
  const fordMondeo = 'FORD MONDEO';
  const toyotaCorolla = 'TOYOTA COROLLA';
  const fordFocus = 'FORD FOCUS';

  return (
    <section className="price-list">
      <main className="price-list__wrapper wrapper">
        <h2 className="price-list__title title general-title">
          Прейскурант цен на транспортные автоуслуги
        </h2>
        <h4>
          Государственного Учреждения "Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики
        </h4>
        <div className="price-list__items">
          <PriceListItem 
            title={armored}
            marka1={mercedesBens}
            marka2={bmw760}
            CustomLink={price-list-item__lease }
          />
        </div>
      </main>
    </section>
  );
}

export default PriceList;
