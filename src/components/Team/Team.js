import React from 'react';
import team1 from '../../images/team-1.png'
import team2 from '../../images/team-2.png'
import './Team.css'

function Team () {
  return (
    <section className='team'>
      <main className='team__wrapper wrapper'>
        <h2 className='team__title title general-title'></h2>
        <ul className='team__list'>
          <li className='team__list-item'>
            <figure className='team__figure'>
              <img className='team__image' src={team1} alt=''></img>
              <figcaption className='team__figcaption'>
                <h3 className='team__subtitle subtitle'></h3>
                <p className='team__text text'>test</p>
                <p className='team__text text'>test</p>
              </figcaption>
              <div className='team__social'>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
              </div>
            </figure>
          </li>
          <li className='team__list-item'>
            <figure className='team__figure'>
              <img className='team__image' src={team2} alt=''></img>
              <figcaption className='team__figcaption'>
                <h3 className='team__subtitle subtitle'></h3>
                <p className='team__text text'>test</p>
                <p className='team__text text'>test</p>
              </figcaption>
              <div className='team__social'>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
                <a className='team__social-link'></a>
              </div>
            </figure>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Team;