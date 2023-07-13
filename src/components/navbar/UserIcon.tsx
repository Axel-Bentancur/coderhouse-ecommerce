//Components
import IconsButton from '../buttons/IconsButton';
//Types
import { ITargetWidget } from '../../interfaces/ITargetWidget';
//Others
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function UserIcon({ setIsOpen }: { setIsOpen: (el: ITargetWidget) => void }) {
  return (
    <IconsButton setIsOpen={setIsOpen} element='list' additionClass='plr-3 hidden lg:block'>
      <FontAwesomeIcon icon={faUser} size="xl" />
    </IconsButton>
  )
}