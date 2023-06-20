import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext copy';
//Components
import Counter from '../components/Counter';
import { Tabs } from '../components/Tabs';
//Others
import { getProductByIdAndCategory } from '../utilities/Utilities';


export default function Product(): JSX.Element {
  const Product_list = useContext(ProductContext);
  const { category, title } = useParams();
  const product = getProductByIdAndCategory(category, title, Product_list);

  return (
    <>
    {product &&
      <div className='flex-grow bg-[#f5f5f4]'>
        <div className='flex flex-col lg:flex-row my-16'>
          <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full" src={product.thumbnail} alt="" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {product.images.map((path, idx) => (
                  <div key={idx}>
                    <img className="h-auto max-w-full" src={path} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
            <div>
              <h2 className='text-3xl font-bold noto mb-8'>{product.title}</h2>
              <p className='noto mb-8 text-justify md:text-left'>{product.description}</p>
              <p className='text-4xl noto mb-4'>${product.price}.00</p>
              {product.stock < 3 &&
                <p className='noto mb-12 text-purple-500'>Only {product.stock} avaiable!</p>
              }
              <div>
                <Counter stock={product.stock}/>
              </div>
              <div className='flex justify-between md:block'>
                <button className='bg-gray-900 text-white px-4 py-2 mr-8'>ADD TO CART</button>
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
