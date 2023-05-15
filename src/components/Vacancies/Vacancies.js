import React from "react";
import LinkToMain from "../LinkToMain/LinkToMain";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Vacancies.css";

function Vacancies() {
  return (
    <section className="vacancies">
      <main className="vacancies__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="Вакансии" />
        </div>
        <h2 className="vacancies__title title general-title">Вакансии</h2>
        <h4 className="vacancies__subtitle subtitle">
          Развитие – одна из главных ценностей нашей компании. Мы стремимся к
          росту и создаем все условия для того, чтобы наши сотрудники
          развивались вместе с нами.
        </h4>
        <div className="vacancies__description">
          <p className="vacancies__description-text text">
            В Государственном учреждении "Автотранспортное предприятие" при
            Управлении делами Президента Кыргызской Республики, вас ждут
            комфортная рабочая атмосфера и интересные амбициозные задачи.
          </p>
          <p className="vacancies__description-text">
            У нас есть все условия, чтобы вы могли непрерывно совершенствовать
            профессиональные компетенции.
          </p>
          <p className="vacancies__description-text">
            Мы заботимся о здоровье наших сотрудников и поддерживаем их в
            стремлении к здоровому образу жизни. У нас полный социальный пакет.
            Станьте частью команды единомышленников.
          </p>
          <ul className="vacancies__description-list">
            <li className="vacancies__description-list__item">
              <Link
                to="economist"
                className="vacancies__description-list__link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Экономист
              </Link>
              <p>1</p>
            </li>
            <li className="vacancies__description-list__item">
              <Link
                to="production-manager"
                className="vacancies__description-list__link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Менеджер по производству
              </Link>
              <p>1</p>
            </li>
            <li className="vacancies__description-list__item">
              <Link
                to="accountant-cashier"
                className="vacancies__description-list__link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                бухгалтер-кассир
              </Link>
              <p>1</p>
            </li>
            <li className="vacancies__description-list__item">
              <Link
                to="driver"
                className="vacancies__description-list__link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                водитель
              </Link>
              <p>2</p>
            </li>
          </ul>
          <ul className="vacancies__open-list">
            <li className="vacancies__open-list__item economist">
              <ul className="vacancies__open-list2">
                <li className="vacancies__open-list2__item">
                  <h3 className="subtitle">Экономист</h3>
                  <h5 className="subtitle">Общие положения</h5>
                  <p className="text">
                    1.1. Государственное учреждения «Автотранспортное
                    предприятие» при Управлении делами Президента Кыргызской
                    Республики. {<br />}
                    1.2. Экономист, относятся к должностям группы 2.{<br />}
                    1.3. Подчиняется непосредственно главному бухгалтеру.
                    {<br />}
                    1.4. В своей деятельности руководствуется: Регламентами АТП,
                    приказами директора, указаниями главного бухгалтера,
                    действующими правилами и инструкциями по технике
                    безопасности и настоящей должностной инструкцией.
                  </p>
                </li>
                <li className="vacancies__open-list2__item">
                  <h5 className="subtitle">Квалификационные требования</h5>
                  <p className="text">
                    2.1. Для должности экономиста предъявляются следующие
                    квалификационные требования: {<br />}
                    2.2. высшее экономическое образования. {<br />}
                    2.3. Стаж работы не менее 5-ти лет. {<br />}
                    2.4. Профессиональная компетентность: Знания: - Бюджетного
                    кодекса Кыргызской Республики; - вопросов экономики, основ
                    трудового законодательства; - владение государственным и
                    официальным языками в объеме, необходимом для исполнения
                    должностных обязанностей. Умения: - сбора, анализа,
                    систематизации и обобщения информации; подготовки
                    аналитических документов; эффективного сотрудничества с
                    коллегами; Навыки: - работы с нормативными правовыми актами
                    и применения их на практике; планирования работы и
                    правильного распределения служебного времени; оперативной
                    реализации управленческих решений; владение компьютерной и
                    оргтехникой, необходимыми программными продуктами;
                  </p>
                </li>
              </ul>
            </li>
            <li className="vacancies__open-list__item production-manager">
              <ul className="vacancies__open-list2">
                <li className="vacancies__open-list2__item">
                  <h3 className="subtitle">менеджер по производству</h3>
                  <h5 className="subtitle">Общие положения</h5>
                  <p className="text">
                    1.1. Государственное учреждения «Автотранспортное
                    предприятие» при Управлении делами Президента Кыргызской
                    Республики. {<br />}
                    1.2. Менеджер, относятся к должностям группы 2.{<br />}
                    1.3. Подчиняется непосредственно главному инженеру.
                    {<br />}
                    1.4. В своей деятельности руководствуется: Регламентами АТП,
                    приказами директора, указаниями главного инженера,
                    действующими правилами и инструкциями по технике
                    безопасности и настоящей должностной инструкцией.
                  </p>
                </li>
                <li className="vacancies__open-list2__item">
                  <h5 className="subtitle">Квалификационные требования</h5>
                  <p className="text">
                    2.1. Для должности менеджера предъявляются следующие
                    квалификационные требования: {<br />}
                    2.2. высшее экономическое образования. {<br />}
                    2.3. Стаж работы не менее 3-х лет. {<br />}
                    2.4. Профессиональная компетентность: Знания: - Регулирующие
                    документы в соответствующей сфере; - владение
                    государственным и официальным языками в объеме, необходимом
                    для исполнения должностных обязанностей. Умения: - сбора,
                    анализа, систематизации и обобщения информации; подготовки
                    аналитических документов; эффективного сотрудничества с
                    коллегами; Навыки: - работы с нормативными правовыми актами
                    и применения их на практике; планирования работы и
                    правильного распределения служебного времени; оперативной
                    реализации управленческих решений; владение компьютерной и
                    оргтехникой, необходимыми программными продуктами;
                  </p>
                </li>
              </ul>
            </li>
            <li className="vacancies__open-list__item accountant-cashier">
              <ul className="vacancies__open-list2">
                <li className="vacancies__open-list2__item">
                  <h3 className="subtitle">Бухгалтер - кассир</h3>
                  <h5 className="subtitle">Общие положения</h5>
                  <p className="text">
                    1.1. Государственное учреждения «Автотранспортное
                    предприятие» при Управлении делами Президента Кыргызской
                    Республики. {<br />}
                    1.2. Менеджер, относятся к должностям группы 3.{<br />}
                    1.3. Подчиняется непосредственно главному бухгалтеру.
                    {<br />}
                    1.4. В своей деятельности руководствуется: Регламентами АТП,
                    приказами директора, указаниями главного бухгалтера,
                    действующими правилами и инструкциями по технике
                    безопасности и настоящей должностной инструкцией.
                  </p>
                </li>
                <li className="vacancies__open-list2__item">
                  <h5 className="subtitle">Квалификационные требования</h5>
                  <p className="text">
                    2.1. Для должности бухгалтер - кассира предъявляются
                    следующие квалификационные требования: {<br />}
                    2.2. среднее профессиональное образование в сфере
                    бухгалтерского учета. {<br />}
                    2.3. Стаж работы не менее 1-го года. {<br />}
                    2.4. Профессиональная компетентность: Знания: - Бюджетного
                    кодекса Кыргызской Республики; - Порядка ведения кассовых
                    операций в Кыргызской Республике, утвержденного
                    постановлением Правления Национального банка Кыргызской
                    Республики от 23 июля 1994 года №1/7; - владение
                    государственным и официальным языками в объеме, необходимом
                    для исполнения должностных обязанностей. Умения:
                    качественного исполнения поручений вышестоящих
                    руководителей; эффективного сотрудничества с коллегами; -
                    навыки: соответствующие специфике работы; работы с
                    нормативными правовыми актами и применения их на практике;
                    владение компьютерной и оргтехникой, необходимыми
                    программными продуктами;
                  </p>
                </li>
              </ul>
            </li>
            <li className="vacancies__open-list__item driver">
              <ul className="vacancies__open-list2">
                <li className="vacancies__open-list2__item">
                  <h3 className="subtitle">Водителя</h3>
                  <h5 className="subtitle">Общие положения</h5>
                  <p className="text">
                    1.1. Государственное учреждения «Автотранспортное
                    предприятие» при Управлении делами Президента Кыргызской
                    Республики. {<br />}
                    1.2. Водитель, относятся к должностям группы 4.{<br />}
                    1.3. Подчиняется непосредственно начальнику службы по службе
                    эксплуатации. {<br />}
                    1.4. В своей деятельности руководствуется: в своей работе
                    Регламенту АТП, приказами АТП, указаниями начальника службы
                    по службе эксплуатации, действующими правилами и
                    инструкциями по технике безопасности и настоящей должностной
                    инструкцией.
                  </p>
                </li>
                <li className="vacancies__open-list2__item">
                  <h5 className="subtitle">Квалификационные требования</h5>
                  <p className="text">
                    2.1. Для должности водителя предъявляются следующие
                    квалификационные требования: {<br />}
                    2.2. квалификационный разряд не ниже 2 класса. {<br />}
                    2.3. Стаж работы не менее 5-ти лет. {<br />}
                    2.4. Профессиональная компетентность: Знания: - Правила
                    дорожного движения утвержденным постановлением Правительства
                    Кыргызской Республики от 4 августа 1999 года №421; -
                    Инструкций и положений в соответствующей сфере; Умения:
                    качественного исполнения поручений вышестоящих
                    руководителей; эффективного сотрудничества с коллегами; -
                    навыки: соответствующие специфике работы; обладание
                    необходимыми практическими навыками вождения автомашин,
                    надлежащей ее эксплуатации, содержания в технически
                    исправном состоянии, по состоянию здоровья, не имеющие
                    противопоказаний работы в условиях по обеспечению
                    безопасности дорожного движения.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}

export default Vacancies;
