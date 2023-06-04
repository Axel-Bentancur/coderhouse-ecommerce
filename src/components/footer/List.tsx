import { Link } from "react-router-dom"

interface Props {
  itemList:
    {
      title: string,
      path: string,
    }[]
}

export default function List(props: Props) {
  const { itemList } = props;

  return (
    <div className='flex flex-col'>
      { itemList.map ((item, idx) => (
        <Link to={item.path} key={idx} className="my-1">{item.title}</Link>
      ))}
    </div>
  )
}
