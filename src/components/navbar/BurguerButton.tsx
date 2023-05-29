import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

enum Target {
  list,
  cart
}

interface Status {
  isOpen: boolean,
  setIsOpen: (el: Target) => void,
}

export default function BurguerButton(props:Status) {
  const { isOpen, setIsOpen } = props;

  return (
    <>
    {isOpen ?
      <button onClick={() => setIsOpen(Target.list)} className="px-3 py-1 rounded text-gray-800 lg:hidden">
        <FontAwesomeIcon icon={faXmark} size="xl"/>
      </button>
    :
      <button onClick={() => setIsOpen(Target.list)} className="px-3 py-1 rounded text-gray-800 lg:hidden">
        <FontAwesomeIcon icon={faBars} size="xl"/>
      </button>
    }
    </>
  )
}
