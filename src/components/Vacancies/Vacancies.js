import React from "react";
import "/Vacancies.css";

function Vacancies() {
  return (
    <section className="vacancies">
      <main className="vacancies__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="Вакансии" />
        </div>
        <h2 className="title general-title">
          Вакансии
        </h2>
        <h4 className="subtitle">
          Развитие – одна из главных ценностей нашей компании.
          Мы стремимся к росту и создаем все условия для того, чтобы наши сотрудники развивались вместе с нами.
        </h4>
      </main>
    </section>
  );
}

export default Vacancies;