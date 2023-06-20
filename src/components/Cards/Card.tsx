import { Link } from 'react-router-dom';
//Types
import { IProducts } from '../../interfaces/IProducts';
//Others
import { ToCurrency } from '../../utilities/Utilities';

export default function Card({item, lastElement}: {item:IProducts, lastElement:string | undefined}) {
  const {title, price, category, thumbnail} = item;
  const formatedPrice = ToCurrency(price, 'ARSPESO');

  return (
    <Link to={lastElement !== 'shop' ? `${title}` : `${category}/${title}`}>
      <div className="col-span-1 flex flex-col h-full">
        <img src={thumbnail} alt="bowl" className='mb-6'/>
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
    </Link>
  )
}