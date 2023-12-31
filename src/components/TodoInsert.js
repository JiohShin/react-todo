import React, { useState, useCallback } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        placeholder="할 일을 입력하세요."
        value={value}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;
