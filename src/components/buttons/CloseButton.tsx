import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import IconsButton from './IconsButton';
import { ITargetWidget } from '../../interfaces/ITargetWidget';


export default function CloseButton({ setIsOpen, element, title}: { setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget; title: string | null}) {

  return (
    <div className={`flex w-full items-center ${title ? 'justify-between' : 'justify-end'}`}>
      {title && <h2 className="text-lg font-medium text-gray-900">{title}</h2>}
        <IconsButton setIsOpen={setIsOpen} element={element}>
          <FontAwesomeIcon icon={faXmark} size="xl"/>
        </IconsButton>
    </div>
  )
}