import React from 'react';

const Counter = ({ count, clicks, setNumber, setClicks, onNewValueClicks, onNewValue, onDecrement, onIncrement, onReset, onResetClicks, onMinusClick, onPlusClick }) => {

  return (
    <div>
      <div>
        <h3 className='counterTitle'>Counter</h3>
        <div className='counter'>{count}</div>
        <br />
        <input
          onChange={event => onNewValueClicks(event.target.value)}
          value={setClicks}
          type='number'
        />
        <button className='counterFunctions' onClick={onResetClicks}>Set <b>Clicks</b> value and Reset <b>Counter</b> to 0</button>
        <button className='counterFunctions' onClick={onDecrement}>-1</button>
        <button className='counterFunctions' onClick={onIncrement}>+1</button>
        <br />
        <h3 className='clickTitle'>Clicks</h3>
        <div className="clicks">{clicks}</div>
        <br />
        <input
          onChange={event => onNewValue(event.target.value)}
          value={setNumber}
          type="number"
        />
        <button className='clickFunctions'
          onClick={onReset}>Set <b>Counter</b> value and Reset <b>Clicks</b> to 0</button>
        <button className='clickFunctions' onClick={onMinusClick}>-1</button>
        <button className='clickFunctions' onClick={onPlusClick}>+1</button>
      </div>
    </div>
  );
}


export default Counter;