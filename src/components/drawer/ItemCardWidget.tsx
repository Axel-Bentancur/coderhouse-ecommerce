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
    <div>
      <span>{image}</span>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  )
}
