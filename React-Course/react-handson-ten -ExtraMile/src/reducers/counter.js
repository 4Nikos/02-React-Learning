const initialState = {
  // counterstate initial value
  count: 0,
  // clicks initial value
  clicks: 0,
  // first input box initial value
  setClicks: 0,
  // second input box inital value
  setNumber: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    // -------------------------------------------------------counter-------------------------------------------------------
    // minus one from counter
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };

    // plus one to counter
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };

    // process inputted value from clicks input
    case 'NEWVALUE':
      return {
        ...state,
        setNumber: action.number
      };

    // set counter value and reset clicks
    case 'RESET':
      return {
        ...state,
        count: parseInt(state.setNumber),
        clicks: state.clicks = 0
      };
    // -------------------------------------------------------clicks-------------------------------------------------------
    // minus one from clicks
    case 'MINUSCLICK':
      return {
        ...state,
        clicks: state.clicks - 1
      };

    // plus one to clicks
    case 'PLUSCLICK':
      return {
        ...state,
        clicks: state.clicks + 1
      }

    // process inputted value from counter input
    case 'NEWVALUECLICKS':
      return {
        ...state,
        setClicks: action.number
      };

    // set clicks value and reset counter
    case 'RESETCLICKS':
      return {
        ...state,
        clicks: parseInt (state.setClicks),
        count: state.count = 0,
        
      };

    // default case
    default:
      return state;
  }
}

export default counterReducer;