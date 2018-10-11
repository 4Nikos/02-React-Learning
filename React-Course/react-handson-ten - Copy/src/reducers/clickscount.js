const firstState = {
  clicks: 0
};

function clicksReducer(state = firstState, action) {
  switch (action.type) {
    case 'SETTO':
      return {
        ...state,
        count: (state.count +200)
      };
    case 'RESET':
      return {
        ...state,
        clicks: (state.clicks = 0)
      };
    default:
      return state;
  }
}

export default clicksReducer;