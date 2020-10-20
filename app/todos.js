import React, { useState } from "react";
import Todo from "./todo";
import AddTodo from "./add-todo";
import shortid from "shortid";

import { toggleDone, addTodo, deleteTodo } from "./state-functions";

export default function Todos(props) {
  const [todos, setTodos] = useState([
    {
      id: shortid.generate(),
      name: "Write a blog post for Sitepoint",
      done: false,
    },
    { id: shortid.generate(), name: "Blog about Jest", done: false },
    { id: shortid.generate(), name: "Walk the dog", done: false },
  ]);

  const onToggleDone = (id) => {
    setTodos(toggleDone(todos, id));
  };

  const onAddTodo = (todo) => {
    setTodos(addTodo(todos, todo));
  };

  const onDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id));
  };

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => onToggleDone(id)}
            deleteTodo={(id) => onDeleteTodo(id)}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <p>
        The <em>best</em> todo app out there.
      </p>
      <h1>Things to get done:</h1>
      <ul className="todos-list">{renderTodos()}</ul>
      <AddTodo onNewTodo={(todo) => onAddTodo(todo)} />
    </div>
  );
}
