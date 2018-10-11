const initialState = {
  items: [
    {
      id: 1,
      todo: 'clean' 
    }
  ],
  // below is for when a user clicks on an item to be updated
  selectedTodo: null,
  // below is a placeholder for the input for adding a new item and when it is added, it will default to the below string
  addTodoText: "",
  // below is for when a user wants to edit the todo item after it has been clicked
  editTodoText: ""
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const existingIds = state.items.map(todo => todo.id);
      const largestExistingId = Math.max(...existingIds);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: largestExistingId + 1,
            todo: state.addTodoText
          }
        ],
        addTodoText: ""
      };
    case 'TODO_TEXT_CHANGED':
      return {
        ...state,
        addTodoText: action.text
      }
    case 'TODO_SELECTED':
      return {
        ...state,
        selectedTodo: action.id,
        editTodoText: state.items.find(item => item.id === action.id).todo
      }
    case 'APPLY_TODO_EDITS':
      return {
        ...state,
        items: state.items.map(item => {
          if(item.id === state.selectedTodo){
            return {...item, todo: state.editTodoText} 
          }  else {
            return item
          }
        }),
        editTodoText: "",
        selectedTodo: null
      }
    case 'TODO_EDIT_TEXT_CHANGED':
      return {
        ...state,
        editTodoText: action.text
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todoReducer;