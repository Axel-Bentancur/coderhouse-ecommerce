import { ToCurrency } from '../../utilities/Utilities';
import './Card.scss';

interface Props {
  product: {
    title: string,
    price: number,
    image: string,
  }
}

export default function Card(props: Props) {
  const {title, price, image} = props.product;
  const formatedPrice = ToCurrency(price, 'ARSPESO');

  return (
  <div className="col-span-1 flex flex-col">
    <img src={image} alt="bowl" className='mb-6'/>
    <div className='flex flex-row justify-between md:border-t-2 border-gray-300'>
      <h2 className="mt-1 pr-4 ">
        {title}
      </h2>
      <button className='p-2 text-xl'>+</button>
    </div>
    <div className="flex flex-wrap mt-auto pt-3 text-xs border-b-2 border-gray-300">
      <p className="mb-2">{formatedPrice}</p>
    </div>
  </div>
  )
}