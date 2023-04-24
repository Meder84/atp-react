import React, {useState} from "react";
import test from '../../images/garage/bmw.jpg'
// import { cards } from "../../utils/consts";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
const cards = [
  {
    id:1,
    name: 'Автобусы',
    url: '../../images/garage/bmw.jpg'
  }
]

function Card(props) {
  // const [state, setState] = useState(cards)

  return(
    <section className="card">
      {cards.map(el => 
        <div key={el.id}>
          <h3>{el.name}</h3>
          <img key={el.id} src={el.url} />
        </div>
      )}
    </section>
  )
}

// import React, {useState} from "react";
// import {pizza_description} from "../Food_description/Pizza/Pizza";
 
// export let Pizza_page = () => {
 
//     let [pizza, different_pizza] = useState(pizza_description)
 
 
//     return (<div>
//         {pizza.map(el => <div key={el.id}>
//             {el.title} {el.description} {el.price}
//             <img key={el.id} src={el.image}/>
//         </div>)}
//             </div>)
// }
export default Card;