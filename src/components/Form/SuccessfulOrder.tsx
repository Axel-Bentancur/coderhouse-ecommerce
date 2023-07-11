import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function SuccessfulOrder({ id }: { id: string | null }) {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-100 p-8 rounded-lg m-4">
      <div className="flex items-center justify-center w-24 h-24 bg-purple-200 rounded-full mb-6">
        <FontAwesomeIcon icon={faHandsClapping} size="3x" className="text-purple-600" />
      </div>
      <h2 className="text-3xl text-purple-800 mb-4 text-center">Thank You!</h2>
      <p className="text-lg text-gray-800 mb-2 text-center">Your order has been successful.</p>
      <p className="text-base mb-2 text-gray-800 text-center">Order ID:
        <span className='text-purple-700 text-center'> #1567891651{id}</span>
      </p>
      <p className="text-base text-gray-800 mb-2 text-center">We will notify you once your order is shipped.</p>
      <p className="text-base text-gray-800 mb-6 text-center">If you have any questions, please contact our customer support.</p>
      <p className='text-sm text-gray-500 text-center'>All the best,</p>
      <Link to={'/'}>
        <span className={`md:inline-block md:font-bold text-2xl noto text-purple-800`}>quietform.</span>
      </Link>
    </div>
  );
}
