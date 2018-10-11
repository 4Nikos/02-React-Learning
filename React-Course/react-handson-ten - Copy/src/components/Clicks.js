import React from 'react';

const Clicks = ({ clicks, onSet, onReset }) => {

  return (
    <div>
      <div>
        <br />
        <span>{clicks}</span>
        <button onClick={onSet}>Button to set counter</button>
        <br />
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}


export default Clicks;