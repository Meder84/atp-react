import React, {useState, useEffect} from 'react';
import { cards } from '../../utils/consts';
import Card from '../Cards/Cards';
import './Gallery.css';

function Gallery() {

  return(
    <section className="gallery">
      <main className='gallery__wrapper'>
        <ul className="gallery__list">
          {
            cards.map((card) => 
            <Card 
              key = {card.id}
              card = {card}
            />
            )
          }
        </ul>
      </main>
    </section>
  )
}

export default Gallery;