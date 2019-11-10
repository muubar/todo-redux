import FilterList from './filterList';
import TodoList from './todoList';
import TodoInput from './todoInput';
import React from 'react';
import './index.css';

const fetchedTodos = [
  { text: "hello", done: false },
  { text: "bye", done: true }
]
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: fetchedTodos, value: "" };
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleAddClick = (event) => {
    const newTodo = { text: this.state.value, done: false };
    this.setState(({ todos }) => ({ todos: [...todos, newTodo], value: "" }));
  }

  handleTodoToggle = (event) => {
    event.persist();
    this.setState(({ todos }) => {
      return {
        todos: todos.map((todo) => {
          return (todo.text === event.target.innerText ? { text: todo.text, done: !todo.done } : todo)
        })
      }
    })
  }

  render() {
    return (
      <>
        <TodoInput value={this.state.value} onClick={this.handleAddClick} onChange={this.handleInputChange} />
        <TodoList todos={this.state.todos} filter={this.props.match.params.filter} onClick={this.handleTodoToggle} />
        <FilterList />
      </>
    )
  }
}
