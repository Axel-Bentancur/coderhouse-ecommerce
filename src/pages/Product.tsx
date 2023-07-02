import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
//Components
import Counter from '../components/Counter';
import ColorSelect from '../components/product/ColorSelect';
import ImageGallery from '../components/product/ImageGallery';
import { Tabs } from '../components/product/Tabs';
//Data
import { CartContext } from '../context/CartContext';
//Types
import { IProductWithQuantity } from '../interfaces/IProducts';
//Others
import { checkstock, disableButtonState } from '../utilities/Utilities';
import useCounter from '../hooks/useCounter';


export default function Product(): JSX.Element {
  const Data = useContext(ProductContext);
  const CartProduct = useContext(CartContext);

  const product = Data[0][0];

  const disable = disableButtonState(product?.stock);

  const [state, setState] = useState(product);
  const [counter, increment, decrement] = useCounter();
  const [selectedColor, setSelectedColor] = useState('');

  const quantityStock = checkstock(product, CartProduct?.cart);

  const handleAddToCart = () => {
    if(state){
      const product: IProductWithQuantity =
      { ...state,
        quantity: counter,
        colors: {
          ...state.colors,
          chosenColor: selectedColor,
        },
      }
      CartProduct?.addToCart(product);
    }
  };

  return (
    <>
    {product &&
      <div className='flex-grow bg-[#f5f5f4]'>
        <div className='flex flex-col lg:flex-row my-16'>
          <ImageGallery product={product}/>
          <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
            <div>
              <h2 className='text-3xl font-bold noto mb-8'>{product.title}</h2>
              <p className='noto mb-8 text-justify md:text-left'>{product.description}</p>
              <p className='text-4xl noto mb-4'>${product.price}.00</p>
              {product.stock < 3 && product.stock > 0 &&
                <p className='noto mb-12 text-purple-500'>Only {product.stock} avaiable!</p>
              }
              <div>
                <ColorSelect selectColor={setSelectedColor} choosenColor={selectedColor} colorOptions={product.colors.options}/>
                <Counter stock={quantityStock} increment={increment} decrement={decrement} counter={counter}/>
              </div>
              <div className='flex justify-between md:block'>
                <button onClick={handleAddToCart} className={`text-white px-4 py-2 mr-8 ${disable ? 'bg-gray-500' : 'bg-gray-900'}`} disabled={disable}>ADD TO CART</button>
                <button className='px-4 py-2'>
                  <p className='text-gray-900 border-b-2 border-gray-900'>Add to Favorites</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    }
    </>
  )
}