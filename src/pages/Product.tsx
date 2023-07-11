import { useContext, useEffect, useState } from 'react';
//Components
import Counter from '../components/Counter';
import ColorSelect from '../components/product/ColorSelect';
import ImageGallery from '../components/product/ImageGallery';
import { Tabs } from '../components/product/Tabs';
//Data
import { CartContext } from '../context/CartContext';
//Types
import { IProductWithQuantity, IProducts } from '../interfaces/IProducts';
//Others
import { checkstock, getLastPathSegment } from '../utilities/Utilities';
import useCounter from '../hooks/useCounter';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/config';
import { useLocation } from 'react-router-dom';


export default function Product(): JSX.Element {
  const productTitle = getLastPathSegment(useLocation().pathname);
  const cleanTitle = productTitle && decodeURIComponent(productTitle)

  const [fetchData, setFetchData] = useState<IProducts>();
  const [counter, increment, decrement, reset] = useCounter();
  const [selectedColor, setSelectedColor] = useState<string>('');

  const CartProduct = useContext(CartContext);
  const quantityStock = checkstock(fetchData, CartProduct?.cart);
  const disable = quantityStock === 0 ? true : false;

  const handleAddToCart = () => {
    if(fetchData){
      const product: IProductWithQuantity =
      { ...fetchData,
        quantity: counter,
        colors: {
          ...fetchData.colors,
          chosenColor: selectedColor,
        },
      }
      CartProduct?.addToCart(product);
    }
    reset();
  };

  useEffect(() => {
    if (fetchData && fetchData.colors.options.length) {
      setSelectedColor(fetchData.colors.options[0].name);
    }
  }, [fetchData]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      const products = collection(db, 'products');
      const product = query(products, where('title', '==', cleanTitle));

    try {
      const querySnapshot = await getDocs(product);
      const product_list = querySnapshot.docs.map((doc) => {
        const productData = doc.data();
        return { ...productData, id: doc.id };
      }) as IProducts[];
      setFetchData(product_list[0]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    };

    fetchDataFromFirestore();
  }, [productTitle]);


  return (
    <>
    {fetchData &&
      <div className='flex-grow bg-[#f5f5f4]'>
        <div className='flex flex-col lg:flex-row my-16'>
          <ImageGallery product={fetchData}/>
          <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
            <div>
              <h2 className='text-3xl font-bold noto mb-8'>{fetchData.title}</h2>
              <p className='noto mb-8 text-justify md:text-left'>{fetchData.description}</p>
              <p className='text-4xl noto mb-4'>${fetchData.price}.00</p>
              {fetchData.stock < 3 && fetchData.stock > 0 &&
                <p className='noto mb-12 text-purple-500'>Only {fetchData.stock} avaiable!</p>
              }
              <div>
                <ColorSelect selectColor={setSelectedColor} choosenColor={selectedColor} colorOptions={fetchData.colors.options}/>
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