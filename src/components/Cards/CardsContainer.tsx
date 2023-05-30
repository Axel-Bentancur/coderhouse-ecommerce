import Card from "../Cards/Card";
import Plates from '../../assets/plates.jpg';
import Jar from '../../assets/jar.jpg';
import D_cup from '../../assets/double_cup.jpg';
import Pot from '../../assets/pot.jpg';
import './CardsContainer.scss';

const list = [
  {
    title: 'Candy dish',
    price: '$ 40.00',
    image: Plates,
  },
  {
    title: 'Bowls set',
    price: '$ 32.00',
    image: Jar,
  },{
    title: 'Stoneware set',
    price: '$ 45.00',
    image: D_cup,
  },{
    title: 'Serving Kintsugi bolws',
    price: '$ 64.50',
    image: Pot,
  }
]

export default function CardsContainer() {
  return (
    <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
      {list.map( (product, index) => (
          <Card key={index} product={product}/>
        )
      )}
    </div>
  )
}