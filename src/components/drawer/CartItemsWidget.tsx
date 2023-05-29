import ItemCardWidget from "./itemCardWidget";

enum Target {
  list,
  cart
}

interface Props {
  setIsOpen: (el: Target) => void,
  element: number,
  navLinks: {
    title: string,
    path: string,
    show?: boolean,
  }[],
  itemList: {
    image: string,
    title: string,
    price: number,
    quantity: number,
  }[]
}

export default function CartItemsWidget(props: Props): JSX.Element {
  const {setIsOpen, navLinks, itemList, element} = props;

  return (
    <>
      <div className="p-4 mt-16">
        {itemList.map((el, idx)=> (
          <ItemCardWidget key={idx} item={el}/>
        ))}
        <div onClick={() => setIsOpen(element)} className="group relative flex gap-x-6 rounded-lg p-4 mt-16 hover:bg-gray-50 lg:hidden justify-center bg-purple-200">
          <span>
            Close
          </span>
        </div>
      </div>
    </>
  )
}


/* 

{navLinks.map((el, idx) => (
          <Link key={idx} to={el.path} onClick={() => setIsOpen(Target.list)} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <span>
              {el.title}
            </span>
          </Link>
        ))}
*/