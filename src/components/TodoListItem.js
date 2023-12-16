import React from "react";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => onToggle(id)}
        ></input>
        <label for={id}>{text}</label>
      </div>

      <button className="delete-btn" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoListItem;
