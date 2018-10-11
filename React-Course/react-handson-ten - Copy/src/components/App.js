import React from 'react';
import Counter from './Counter';
import Clicks from './Clicks';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onReset={this.props.onReset} />
        <Clicks clicks={this.props.clicks} onSet={this.props.onSet} onReset={this.props.onReset} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onSet: () => dispatch(set())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
