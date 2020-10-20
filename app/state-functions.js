import shortid from "shortid";

export function toggleDone(todos, id) {
  const filteredTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }

    return todo;
  });

  return filteredTodos;
}

export function addTodo(todos, todo) {
  const newTodo = Object.assign({}, todo, {
    id: shortid.generate(),
    done: false,
  });

  return todos.concat([newTodo]);
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}
