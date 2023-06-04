import Pot from '../assets/pot.jpg';
import Counter from '../components/Counter';
import { Tabs } from '../components/Tabs';


const product = {
  image: Pot,
  title: 'Serving pottery bowls',
  description: 'This handmade pottery bowl boasts a smooth, round shape that tapers slightly towards the rim. Expertly crafted, it features a rustic, textured exterior that showcases the natural variations in the clay. The glaze, in a deep, earthy brown, pools beautifully in the deep curve of the bowl, creating a stunning gradient effect. Perfect for serving a hearty soup or salad, this unique piece is both functional and beautiful, making it a must-have for any home.',
  price: 58,
  quantity: 7,
}

export default function Cart(): JSX.Element {

  return (
    <div className='flex-grow bg-[#f5f5f4]'>
      <div className='flex flex-col lg:flex-row my-16'>
        <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='items-start justify-center p-8 lg:w-1/2 md:flex'>
          <div>
            <h2 className='text-3xl font-bold noto mb-8'>{product.title}</h2>
            <p className='noto mb-8 text-justify md:text-left'>{product.description}</p>
            <p className='text-4xl noto mb-4'>${product.price}.00</p>
            <p className='noto mb-12'>Only {product.quantity} avaiable!</p>
            <div>
              <Counter />
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
  )
}
