import React from 'react';

const Counter = ({ count, clicks, onDecrement, onIncrement, onSet, numberInputed, onSetNewValue }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <label>Times the increment/decrement buttons have been clicked: </label>
        <span>{clicks}</span>
        <br />
        <input
          type="number"
          onChange={event => onSetNewValue(event.target.value)}
          value={numberInputed}
        />
        <button onClick={onSet}>Change Counter value</button>
      </div>
    </div>
  );
}


export default Counter;