import { Link } from "react-router-dom";
import { INavLinks } from "../../interfaces/INavLinks";

export default function List({itemList}:{itemList:INavLinks[]}) {

  return (
    <div className='flex flex-col'>
      { itemList.map ((item, idx) => (
        <Link to={item.path} key={idx} className="my-1">{item.title}</Link>
      ))}
    </div>
  )
}
