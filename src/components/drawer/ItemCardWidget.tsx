interface Props {
  item: {
    image: string,
    title: string,
    price: number,
    quantity: number,
  }
}

export default function ItemCardWidget(props: Props): JSX.Element {
  const {image, title, price} = props.item;

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{title}</a>
            </h3>
            <p className="ml-4">{price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Quantity: 1</p>

          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
          </div>
        </div>
      </div>
  </li>
  )
}
