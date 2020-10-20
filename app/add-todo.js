import React, { useState } from "react";

export default function AddTodo(props) {
  const [formInput, setFormInput] = useState("");

  const inputChange = (event) => {
    setFormInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const newTodoName = formInput;

    if (newTodoName) {
      props.onNewTodo({
        name: newTodoName,
      });

      setFormInput("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Walk the dog"
        onChange={(e) => inputChange(e)}
      />
      <button onClick={(e) => addTodo(e)}>Add Todo</button>
    </div>
  );
}
