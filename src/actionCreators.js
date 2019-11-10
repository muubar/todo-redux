import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text,
    done: false
  }
}

export function toggleTodo(text) {
  return {
    type: TOGGLE_TODO,
    text: text
  }
}