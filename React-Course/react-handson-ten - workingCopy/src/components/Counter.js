import React from 'react';

const Counter = ({ count, clicks, setNumber, onNewValue, onDecrement, onIncrement, onReset }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <span>{clicks}</span>
        <br />
        <input
          onChange={event => onNewValue(event.target.value)}
          value={setNumber}
          type="number"
        />
        <button
          onClick={onReset}>Set Counter value and Reset clicks to 0</button>
      </div>
    </div>
  );
}


export default Counter;