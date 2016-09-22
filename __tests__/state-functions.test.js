import { toggleDone, deleteTodo } from '../app/state-functions';

describe('toggleDone', () => {
  describe('when given an incomplete todo', () => {
    it('marks the todo as completed', () => {
      const startState = {
        todos: [{ id: 1, done: false, text: 'Buy Milk' }]
      };

      const finState = toggleDone(startState, 1);

      expect(finState.todos).toEqual([
        { id: 1, done: true, text: 'Buy Milk' }
      ]);
    });
  });
});

describe('deleteTodo', () => {
  describe('when given a todo to delete', () => {
    it('deletes it', () => {
      const startState = {
        todos: [{ id: 1, done: false, text: 'Buy Milk' }]
      };

      const finState = deleteTodo(startState, 1);

      expect(finState.todos).toEqual([]);
    });
  });
});
