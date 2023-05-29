import './Card.scss';

interface Props {
  product: {
    title: string,
    price: string,
    image: string,
  }
}

export default function Card(props: Props) {
  const {title, price, image} = props.product;

  return (
    <div className='card-container'>
      <img src={image} alt="bowl" />
      <div className='card-text'>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
    </div>
  )
}

