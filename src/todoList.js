import React from "react";
export default function TodoList({ todos, onClick, filter }) {
  var visibleTodos = todos;
  if (filter === "active") visibleTodos = todos.filter(({ done }) => !done);
  else if (filter === "finished") visibleTodos = todos.filter(({ done }) => done);

  return <ul onClick={onClick}>
    {visibleTodos.map((todo, i) => <li
      key={i}
      className={todo.done ? "done" : ""}>
      {todo.text}
    </li>)}
  </ul>;
}
