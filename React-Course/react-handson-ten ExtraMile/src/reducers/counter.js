const initialState = {
  count: 0,
  clicks: 0,
  numberInputed: 0
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
      case 'SET':
      return {
        ...state,
        count: parseInt(state.numberInputed),
        clicks: state.count = 0,
        numberInputed: null
      }
      case 'NEWVALUE':
      return {
        ...state,
        numberInputed: action.number
      }
    default:
      return state;
  }
}
export default counterReducer;