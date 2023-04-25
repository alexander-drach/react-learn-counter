import Button from "../Button/Button";

const Counter = () => {
  let count = 0;

  return (
    <div className="counter">
      <Button operator = "-"/>
      <span className="value">{ count }</span>
      <Button operator = "+"/>
    </div>
  )
}

export default Counter;