import useCounter from '../hooks/useCounter';

export default function Counter() {
  const [counter, increment, decrement] = useCounter();

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={increment} disabled={counter>=7 ? true : false}>+</button>
      <button onClick={decrement} disabled={counter<=0 ? true : false}>-</button>
    </>
  )
}
