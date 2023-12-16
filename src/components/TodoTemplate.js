import React from "react";

const TodoTemplate = ({children}) => {
  return (
    <div className="TodoTemplate">
      <header className="todo-header">
        <h1 className="title">MY TODO LIST</h1>
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
