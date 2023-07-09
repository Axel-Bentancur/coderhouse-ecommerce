
export default function Counter({stock, counter, increment, decrement}: {stock:number | undefined, counter:number, increment: () => void, decrement: () => void}) {

  const minimum = counter <= 0;
  const maximum = stock !== undefined && counter >= stock;


  return (
    <div className="flex mb-8 flex-col">
      <p className="font-bold mb-3">Quantity:</p>
      <div className='flex'>
        <button className={`w-10 h-10 rounded-lg border-2 px-4 py-2 flex items-center justify-center ${minimum ? 'border-gray-400' : 'border-gray-700'}`} onClick={decrement} disabled={minimum}>
          -
        </button>
        <h2 className="px-4 py-2 self-center">{counter}</h2>
        <button className={`w-10 h-10 rounded-lg border-2 px-4 py-2 flex items-center justify-center ${maximum ? 'border-gray-400' : 'border-gray-700'}`} onClick={increment} disabled={maximum}>
          +
        </button>
      </div>
    </div>
  )
}
