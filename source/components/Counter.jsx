import React, { PropTypes } from 'react';

const Counter = ({ counter, onIncrementCounter }) =>
  <div>
    {counter}
    <div>
      <button onClick={onIncrementCounter}>Increment</button>
    </div>
  </div>;

Counter.propTypes = {
  counter: PropTypes.number,
  onIncrementCounter: PropTypes.func,
};

export default Counter;
