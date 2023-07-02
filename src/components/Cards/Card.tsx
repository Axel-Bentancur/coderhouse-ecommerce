import { Link } from 'react-router-dom';
import { useContext } from 'react';
//Data
import { CartContext } from '../../context/CartContext';
//Types
import { IProductWithQuantity, IProducts } from '../../interfaces/IProducts';
//Others
import { ToCurrency, disableButtonState } from '../../utilities/Utilities';

export default function Card({item, lastElement}: {item:IProducts, lastElement:string | undefined}) {
  const {title, price, category, thumbnail, stock} = item;
  const CartProduct = useContext(CartContext);

  const formatedPrice = ToCurrency(price, 'ARSPESO');
  const disable = disableButtonState(stock);

  const handleAddToCart = () => {
    const product: IProductWithQuantity =
    { ...item,
      quantity: 1,
      colors: {
        ...item.colors,
        chosenColor: item.colors.options[0].name,
      },
    }
    CartProduct?.addToCart(product);
  };

  return (
    <div className="col-span-1 flex flex-col h-full">
      <Link to={lastElement !== 'Shop' ? `${title}` : `${category}/${title}`}>
        <img src={thumbnail} alt="bowl" className='mb-6'/>
      </Link>
      <div className='flex flex-row justify-between md:border-t-2 border-gray-300'>
        <Link to={lastElement !== 'Shop' ? `${title}` : `${category}/${title}`}>
          <h2 className="mt-1 pr-4 ">
            {title}
          </h2>
        </Link>
        <button onClick={handleAddToCart} className={`p-2 text-xl ${disable ? 'text-gray-400' : 'text-black'}`} title="Add to Cart" disabled={disable}>+</button>
      </div>
      <div className="flex flex-wrap mt-auto pt-3 text-xs border-b-2 border-gray-300">
        <p className="mb-2">{formatedPrice}</p>
      </div>
    </div>
  )
}