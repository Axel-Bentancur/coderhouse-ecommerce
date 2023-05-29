import Card from "./Card";
import Image from '../assets/ceramic-bowl.jpeg';
import './CardsContainer.scss';

const list = [
  {
    title: 'Candy dish',
    price: '$ 40.00',
    image: Image,
  },
  {
    title: 'Bowls set',
    price: '$ 32.00',
    image: Image,
  },{
    title: 'Stoneware set',
    price: '$ 45.00',
    image: Image,
  },{
    title: 'Serving Kintsugi bolws',
    price: '$ 64.50',
    image: Image,
  }
]

export default function CardsContainer() {
  return (
    <div className="card-list-container">
      {list.map( (product, index) => (
          <Card key={index} product={product}/>
        )
      )}
    </div>
  )
}
