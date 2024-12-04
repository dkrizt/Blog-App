import { useSelector } from "react-redux"

const CounterValue = () => {
    const count = useSelector((state)=> state.counter.countValue)

  return (
    <div className="mx-auto">
      <h3 className="text-xl">The number value is {count}</h3>
    </div>
  )
}

export default CounterValue
