// CounterComponent.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

const CounterComponent = ({ id }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>Counter ID: {id}</span>
    </div>
  );
};

export default CounterComponent;
