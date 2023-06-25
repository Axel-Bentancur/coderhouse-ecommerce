//Components
import IconsButton from '../buttons/IconsButton';
//Types
import { ITargetWidget } from '../../interfaces/ITargetWidget';
//Others
import { CartItemsInIcon } from '../../utilities/Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartWidget({ quantity, setIsOpen }: { quantity: number | undefined; setIsOpen: (el: ITargetWidget) => void }) {
  const items = CartItemsInIcon(quantity);

  return (
    <IconsButton setIsOpen={setIsOpen} element='cart' additionClass='plr-3'>
      <FontAwesomeIcon icon={faBagShopping} size="xl"/>
      { items && <div className='absolute bottom-0 right-0 flex bg-purple-200 rounded-full w-5 h-5 items-center justify-center text-xs font-semibold'>{items}</div> }
    </IconsButton>
  )
}