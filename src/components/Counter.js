import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isCounterToggled = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT_COUNTER" });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE_COUNTER", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREASE_COUNTER" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterToggled && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
