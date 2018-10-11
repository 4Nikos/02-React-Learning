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

  plusfive = () => {
    this.props.dispatch({
      type: 'plusFive'
    });
  };

  minusten = () => {
    this.props.dispatch({
      type: 'minusTen'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  multiply = () => {
    this.props.dispatch({
      type: 'Multiply'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>

          <span>{this.props.count}</span>
          <br />
          <button onClick={this.increment}>Increase by 1</button>
          <br />
          <button onClick={this.plusfive}>Increase by 5</button>
          <br />
          <button onClick={this.decrement}>Decrease by 1</button>
          <br />
          <button onClick={this.minusten}>Decrease by 10</button>
          <br />
          <button onClick={this.reset}>Reset</button>
          <br />
          <br />
          <br />
          <button onClick={this.multiply}>Square (raise to the power 2)</button>
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