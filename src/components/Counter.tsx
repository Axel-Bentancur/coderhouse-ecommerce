//Others
import useCounter from '../hooks/useCounter';

export default function Counter({stock}: {stock:number}) {
  const [counter, increment, decrement] = useCounter();

  return (
    <div className='flex mb-8'>
      <button className='w-[50px] h-[50px] border-2 border-gray-700 px-4 py-2' onClick={decrement} disabled={counter<=0 ? true : false}>-</button>
      <h2 className='px-8 py-2 self-center'>{counter}</h2>
      <button className='w-[50px] h-[50px] border-2 border-gray-700 px-4 py-2' onClick={increment} disabled={counter>=stock ? true : false}>+</button>
    </div>
  )
}
