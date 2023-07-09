import { Link } from 'react-router-dom';
//Types
import { IProducts } from '../../interfaces/IProducts';
//Others
import { ToCurrency } from '../../utilities/Utilities';


export default function Card({item, lastElement}: {item:IProducts, lastElement:string | null}) {
  const {title, price, category, thumbnail} = item;

  const formatedPrice = ToCurrency(price, 'ARSPESO');

  return (
    <div className="col-span-1 flex flex-col h-full">
      <Link to={lastElement? `${title}` : `${category}/${title}`}>
        <img src={thumbnail} alt="bowl" className='mb-6'/>
      </Link>
      <div className='flex flex-row justify-between md:border-t-2 border-gray-300'>
        <Link to={lastElement !== 'Shop' ? `${title}` : `${category}/${title}`}>
          <h2 className="mt-1 pr-4 ">
            {title}
          </h2>
        </Link>
      </div>
      <div className="flex flex-wrap mt-auto pt-3 text-xs border-b-2 border-gray-300">
        <p className="mb-2">{formatedPrice}</p>
      </div>
    </div>
  )
}