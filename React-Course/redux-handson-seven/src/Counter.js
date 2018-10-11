import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>

          <span>{this.props.count}</span>

          <br />
          <button onClick={this.reset}>Reset</button>
          <br />
          <br />
          <br />

          <button onClick={this.increment}>Increase by 1</button>
          <br />
          <br />
          <br />
          <button onClick={this.decrement}>Decrease by 1</button>


        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);