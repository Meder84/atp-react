import React from "react";
import Ul from "../Ul/Ul";
import "./Repair.css";

function Repair() {
  return (
    <section className="repair">
      <main className="wrapper">
        <h2 className="repair__title title general-title">
          Прейскурант цен на платные услуги ремонтных работ 
        </h2>
        <h4 className="repair__subtitle subtitle">
          Государственного Учреждения "Автотранспортное предприятие" при
          Управлении делами Президента Кыргызской Республики
        </h4>
        <div className="repair__list">
          <Ul 
            li1='Наименование услуг'
            li2='"Мерседес-Бенц"'
            li3='"Тойота Лэнд Крузер"'
            li4='"Тойота Каролла, Форд"'
            li5='"Кадиллак"'
          />
        </div>
      </main>
    </section>
  );
}

export default Repair;