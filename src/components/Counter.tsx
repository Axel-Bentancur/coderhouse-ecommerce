
export default function Counter({stock, counter, increment, decrement}: {stock:number, counter:number, increment: () => void, decrement: () => void}) {

  return (
    <div className="flex mb-8 flex-col">
      <p className="font-bold mb-3">Quantity:</p>
      <div className='flex'>
        <button className="w-10 h-10 rounded-lg border-2 border-gray-700 px-4 py-2 flex items-center justify-center" onClick={decrement} disabled={counter <= 0 ? true : false}>
          -
        </button>
        <h2 className="px-4 py-2 self-center">{counter}</h2>
        <button className="w-10 h-10 rounded-lg border-2 border-gray-700 px-4 py-2 flex items-center justify-center" onClick={increment} disabled={counter >= stock ? true : false}>
          +
        </button>
      </div>
    </div>
  )
}
