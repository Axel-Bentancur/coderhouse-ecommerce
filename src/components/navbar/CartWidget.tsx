import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { CartItemsInIcon } from '../utilities/Utilities';

enum Target {
  list,
  cart
}

interface Status {
  quantity?: number,
  setIsOpen: (el: Target) => void,
}

export default function CartWidget(props:Status) {
  const { quantity, setIsOpen } = props;
  const items = CartItemsInIcon(quantity);

  return (
    <>
      <button onClick={() => setIsOpen(Target.cart)} className="px-3 py-1 mr-4 rounded text-gray-800 relative">
        <FontAwesomeIcon icon={faBagShopping} size="xl"/>
        { items && <div className='absolute bottom-0 right-0 flex bg-purple-200 rounded-full w-5 h-5 items-center justify-center text-xs font-semibold'>{items}</div> }
      </button>
    </>
  )
}