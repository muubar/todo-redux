import React from "react";
const TodoInput = ({ value, onClick, onChange }) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange}></input>
      <button type="button" onClick={onClick}>add</button>
    </>
  )
};

export default TodoInput;
