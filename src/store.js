import rootReducer from './rootReducers';
import { createStore } from 'redux';

const fetchedTodos = [
  { text: "hello", done: false },
  { text: "bye", done: true }
]

export default createStore(rootReducer, { todos: fetchedTodos }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());