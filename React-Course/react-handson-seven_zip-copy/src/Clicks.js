import React from 'react';
import { connect } from 'react-redux';

class Clicks extends React.Component {
    setto = () => {
    this.props.dispatch({
      type: 'setTo'
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
        <h2>Button Clicks</h2>
        <div>

          <span>{this.props.clicks}</span>
          <br />
          <button onClick={this.setto}>Set To</button>
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
    count: state.clicks
  };
}

export default connect(mapStateToProps)(Clicks);