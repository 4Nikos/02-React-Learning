import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, newValue, reset, minusClick, plusClick, newValueClicks, resetClicks } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          count={this.props.count}

          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}

          onNewValue={this.props.onNewValue}
          onReset={this.props.onReset}

          clicks={this.props.clicks}

          onMinusClick={this.props.onMinusClick}
          onPlusClick={this.props.onPlusClick}

          onNewValueClicks={this.props.onNewValueClicks}
          onResetClicks={this.props.onResetClicks}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onNewValue: (number) => dispatch(newValue(number)),
    onReset: () => dispatch(reset()),


    onMinusClick: () => dispatch(minusClick()),
    onPlusClick: () => dispatch(plusClick()),
    onNewValueClicks: (number) => dispatch(newValueClicks(number)),
    onResetClicks: () => dispatch(resetClicks())
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    clicks: state.clicks,
    setNumber: state.setNumber,
    setClicks: state.setClicks
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);