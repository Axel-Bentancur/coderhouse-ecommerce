import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { CartItemsInIcon } from '../../utilities/Utilities';
import IconsButton from '../buttons/IconsButton';

import { ITargetWidget } from '../../interfaces/ITargetWidget';

export default function CartWidget({ quantity, setIsOpen }: { quantity: number; setIsOpen: (el: ITargetWidget) => void }) {
  const items = CartItemsInIcon(quantity);

  return (
    <IconsButton setIsOpen={setIsOpen} element='cart' additionClass='plr-3'>
      <FontAwesomeIcon icon={faBagShopping} size="xl"/>
      { items && <div className='absolute bottom-0 right-0 flex bg-purple-200 rounded-full w-5 h-5 items-center justify-center text-xs font-semibold'>{items}</div> }
    </IconsButton>
  )
}