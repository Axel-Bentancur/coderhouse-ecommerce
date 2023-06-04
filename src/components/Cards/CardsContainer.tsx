import Card from "../Cards/Card";
import './CardsContainer.scss';
import { Data } from "../../utilities/Data";


export default function CardsContainer() {
  return (
    <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
      {Data.map( (product, index) => (
          <Card key={index} product={product}/>
        )
      )}
    </div>
  )
}