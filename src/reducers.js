import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        done: false
      };

    case TOGGLE_TODO:
      if (state.text === action.text) return { ...state, done: !state.done }
      else return state;

    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];

    case TOGGLE_TODO:
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};

export { todos };