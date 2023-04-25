import './CarouselSlideElem.css';

function CarouselSlideElem ({
  textComment1, url1, subtitle1, textKind1,
  textComment2, url2, subtitle2, textKind2,
  textComment3, url3, subtitle3, textKind3,
}) {

  return(
    <ul className='carouselSlideElem'>
      <li className='carouselSlideElem__item'>
        <p className='carouselSlideElem__text'>{textComment1}</p>
        <img src={url1} alt={subtitle1} className='carouselSlideElem__image' />
        <h4 className='carouselSubtitle'>{subtitle1}</h4>
        <p className='carouselSlideElem__text'>{textKind1}</p>        
      </li>
      <li className='carouselSlideElem__item'>
        <p className='carouselSlideElem__text'>{textComment2}</p>
        <img src={url2} alt={subtitle2} className='carouselSlideElem__image' />
        <h4 className='carouselSubtitle'>{subtitle2}</h4>
        <p className='carouselSlideElem__text'>{textKind2}</p>
      </li>
      <li className='carouselSlideElem__item'>
        <p className='carouselSlideElem__text'>{textComment3}</p>
        <img src={url3} alt={subtitle3} className='carouselSlideElem__image' />
        <h4 className='carouselSubtitle'>{subtitle3}</h4>
        <p className='carouselSlideElem__text'>{textKind3}</p>

      </li>
    </ul>
  )
}

export default CarouselSlideElem;