import Todo from '../app/todo';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Todo component', () => {
  describe('toggling the todo', () => {
    it('calls the given doneChange callback prop', () => {
      const todo = { id: 1, done: false, name: 'Buy Milk' };
      const doneChange = jest.fn();
      const rendered = TestUtils.renderIntoDocument(
        <Todo todo={todo} doneChange={doneChange} />
      );

      const todoP = TestUtils.findRenderedDOMComponentWithClass(rendered, 'toggle-todo');
      TestUtils.Simulate.click(todoP);
      expect(doneChange).toBeCalledWith(1);
    });
  });
});
