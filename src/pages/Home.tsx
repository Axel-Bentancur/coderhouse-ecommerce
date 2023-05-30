import { Link } from 'react-router-dom'
import Landing from '../assets/lading.png'

const title = 'QUIET HANDMADE CERAMICS AND POTTERY'

export default function Home(): JSX.Element {
  return (
    <div className="flex items-center h-[70vh] relative">
    <img src={Landing} alt="landing" className='w-full h-full object-cover absolute' />
    <div className="z-10 lg:ml-20 xl:ml-40 ml-8 max-w-2xl py-32 sm:py-48 lg:py-56">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">{title}</h1>
      <Link to='/shop' className='inline-block text-white font-bold py-2 px-4 border-2 hover:bg-white hover:bg-opacity-30'>
        SHOP NOW
      </Link>
    </div>
  </div>
  )
}

