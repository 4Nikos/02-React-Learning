const initialState = {
  count: 0,
  clicks: 0,
  number: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'RESET':
      return {
        ...state,
        count: parseInt(state.setNumber),
        clicks: state.clicks = 0
      };
    case 'NEWVALUE':
      return {
        ...state,
        setNumber: action.number
      };
    default:
      return state;
  }
}

export default counterReducer;