import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, set, setNewValue} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
        clicks={this.props.clicks} 
        count={this.props.count} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        onSet={this.props.onSet} 
        onSetNewValue={this.props.onSetNewValue} />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSetNewValue:(number) => dispatch(setNewValue(number)),
    onSet: () => dispatch(set()),
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    clicks: state.clicks,
    numberInputed: state.numberInputed
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);