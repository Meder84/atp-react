import React, {useState, useEffect} from 'react';
import { cards } from '../../utils/consts';
import Card from '../Cards/Cards';
import bmw from '../../images/garage/bmw.jpg';
import bmw2 from '../../images/garage/bmw2.jpg';
import bmw3 from '../../images/garage/bmw3.jpg';
import bmw4 from '../../images/garage/bmw4.jpg';
import mercedes from '../../images/garage/mersedes.jpg';
import miniBuses from '../../images/garage/miniBuses.jpg';
import insideTheBus from '../../images/garage/insideTheBus.jpg';
import mondeo from '../../images/garage/mondeo.jpg';
import mondeo2 from '../../images/garage/mondeo2.jpg';
import cadilac from '../../images/garage/cadilac.jpg';
import cadilac2 from '../../images/garage/cadilac2.jpg';
import bus from '../../images/garage/bus.jpg';
import backTheBuses from '../../images/garage/backTheBuses.jpg';
import buses from '../../images/garage/buses.jpg';
import miniBuses2 from '../../images/garage/miniBuses.jpg';


import './Gallery.css';
import ItemGallery from '../ItemGallery/ItemGallery';

function Gallery() {

  return(
    <section className="gallery">
      <main className='gallery__wrapper wrapper'>
        <h2 className="gallery__title general-title title">Галерея</h2>
        <h4 className="gallery__subtitle subtitle">В нашем арсенале имеется большое количество различных машин: < br/> от легковых до грузовых</h4>
        <ul className="gallery__list">
          <ItemGallery 
            image={bmw}
            alt='Марка BMW'
            title='Марка BMW'
          />
          <ItemGallery 
            image={bmw2}
            alt='Марка BMW'
            title='Марка BMW'
          />
          <ItemGallery 
            image={bmw3}
            alt='Марка BMW'
            title='Марка BMW'
          />
          <ItemGallery 
            image={bmw4}
            alt='Марка BMW'
            title='Марка BMW'
          />
          <ItemGallery 
            image={mercedes}
            alt='Марка MERCEDES-BENZ'
            title='Марка MERCEDES-BENZ'
          />
          <ItemGallery 
            image={miniBuses}
            alt='Микроавтобусы'
            title='Микроавтобусы'
          />
          <ItemGallery 
            image={insideTheBus}
            alt='Атобусы'
            title='Атобусы'
          />
          <ItemGallery 
            image={mondeo}
            alt='Марка FORD'
            title='Марка FORD'
          />
          <ItemGallery 
            image={mondeo2}
            alt='Марка FORD'
            title='Марка FORD'
          />
          <ItemGallery 
            image={cadilac}
            alt='Марка CADILLAC'
            title='Марка CADILLAC'
          />
          <ItemGallery 
            image={cadilac2}
            alt='Марка CADILLAC'
            title='Марка CADILLAC'
          />
          <ItemGallery 
            image={bus}
            alt='Автобус'
            title='Автобус'
          />
          <ItemGallery 
            image={backTheBuses}
            alt='Автобус'
            title='Автобус'
          />
          <ItemGallery 
            image={buses}
            alt='Микроавтобусы'
            title='Микроавтобусы'
          />
          <ItemGallery 
            image={miniBuses}
            alt='Атобусы'
            title='Атобусы'
          />
        </ul>
      </main>
    </section>
  )
}

export default Gallery;