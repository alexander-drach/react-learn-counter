
import { useState } from "react";

const Counter = () => {
  let [current, setCurrent] = useState(0);

  const inc = () => {
    setCurrent(current + 1);
  }

  const dec = () => {
    setCurrent(current - 1);
  }

  return (
    <div className="counter">
      <button className="btn" type="button" onClick={ dec }>-</button>
      <span className="value">{ current }</span>
      <button className="btn" type="button" onClick={ inc }>+</button>
    </div>
  )
}

export default Counter;