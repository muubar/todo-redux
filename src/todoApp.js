import FilterList from './filterList';
import TodoList from './todoList';
import TodoInput from './todoInput';
import React from 'react';
import './index.css';
import { connect } from "react-redux";
import { addTodo, toggleTodo } from './actionCreators';
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleAddClick = () => {
    this.props.addTodo(this.state.value);
    this.setState({ value: "" });
  }

  handleTodoToggle = (event) => {
    this.props.toggleTodo(event.target.innerText);
  }

  render() {
    return (
      <>
        <TodoInput value={this.state.value} onClick={this.handleAddClick} onChange={this.handleInputChange} />
        <TodoList todos={this.props.todos} filter={this.props.match.params.filter} onClick={this.handleTodoToggle} />
        <FilterList />
      </>
    )
  }
}

function mapStateToProps(state) {
  const todos = state.todos;
  return { todos };
}
const mapDispatchToProps = { addTodo, toggleTodo }
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
