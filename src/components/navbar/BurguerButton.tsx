import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import IconsButton from '../buttons/IconsButton';

import { ITargetWidget } from '../../interfaces/ITargetWidget';

export default function BurguerButton({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (el: ITargetWidget) => void }) {

  return (
    <>
    {isOpen ?
      <IconsButton setIsOpen={setIsOpen} element='list' additionClass='pr-3 lg:hidden'>
        <FontAwesomeIcon icon={faXmark} size="xl"/>
      </IconsButton>
      :
      <IconsButton setIsOpen={setIsOpen} element='list' additionClass='pr-3 lg:hidden'>
        <FontAwesomeIcon icon={faBars} size="xl"/>
      </IconsButton>
    }
    </>
  )
}