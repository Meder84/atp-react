import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import testimonials1 from "../../images/testimonials-1.png";
import testimonials2 from "../../images/testimonials-2.png";
import testimonials3 from "../../images/testimonials-3.png";

// import CarouselItem from "../CarouselItem/CarouselItem";
import "./Carousel.css";
import CarouselSlideElem from "../CarouselSlideElem/CarouselSlideElem";

function Carusel() {
  return (
    <section>
      <main>
        <Carousel>
          <Carousel.Item>
            <CarouselSlideElem 
              textComment1 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url1 = {testimonials1}
              subtitle1 = 'Андрей Богатов'
              textKind1 = 'Аренда'
              
              textComment2 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url2 = {testimonials2}
              subtitle2 = 'Павел Матяш'
              textKind2 = 'Сервис ремонта'
              
              textComment3 = 'Очень полезный и удобный сервис для нашего города. Им можно доверять. Всегда беру в аренду только у них.'
              url3 = {testimonials3}
              subtitle3 = 'Юлия Иванова'
              textKind3 = 'Аренда'
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlideElem 
              textComment1 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url1 = {testimonials1}
              subtitle1 = 'Андрей Богатов'
              textKind1 = 'Аренда'
              
              textComment2 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url2 = {testimonials2}
              subtitle2 = 'Павел Матяш'
              textKind2 = 'Сервис ремонта'
              
              textComment3 = 'Очень полезный и удобный сервис для нашего города. Им можно доверять. Всегда беру в аренду только у них.'
              url3 = {testimonials3}
              subtitle3 = 'Юлия Иванова'
              textKind3 = 'Аренда'
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlideElem 
              textComment1 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url1 = {testimonials1}
              subtitle1 = 'Андрей Богатов'
              textKind1 = 'Аренда'
              
              textComment2 = 'Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.'
              url2 = {testimonials2}
              subtitle2 = 'Павел Матяш'
              textKind2 = 'Сервис ремонта'
              
              textComment3 = 'Очень полезный и удобный сервис для нашего города. Им можно доверять. Всегда беру в аренду только у них.'
              url3 = {testimonials3}
              subtitle3 = 'Юлия Иванова'
              textKind3 = 'Аренда'
            />
          </Carousel.Item>
        </Carousel>
      </main>
    </section>
  );
}

export default Carusel;
