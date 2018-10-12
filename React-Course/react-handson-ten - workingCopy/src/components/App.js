import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset, newValue } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          clicks = {this.props.clicks}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onNewValue={this.props.onNewValue}
          onReset={this.props.onReset}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onNewValue: (number) => dispatch(newValue(number)),
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    clicks: state.clicks,
    setNumber: state.setNumber
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);