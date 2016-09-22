import shortid from 'shortid';

export function toggleDone(state, id) {
  const todos = state.todos.map((todo) => {
    if (todo.id === id) {
      todo.done = !todo.done;
    }

    return todo;
  });

  return { todos };
}

export function addTodo(state, todo) {
  const newTodo = Object.assign({}, todo, {
    id: shortid.generate(),
    done: false
  });

  return {
    todos: state.todos.concat([newTodo])
  };
}

export function deleteTodo(state, id) {
  return {
    todos: state.todos.filter((todo) => todo.id !== id)
  };
}
