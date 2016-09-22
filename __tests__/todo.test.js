import Todo from '../app/todo';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Todo component', () => {
  describe('Rendering the todo', () => {
    it('includes the text of the todo in the output', () => {
      const todo = { id: 1, done: false, name: 'Buy Milk' };
      const rendered = TestUtils.renderIntoDocument(
        <Todo todo={todo} />
      );
      const p = TestUtils.findRenderedDOMComponentWithTag(rendered, 'p');
      expect(p.textContent).toBe('Buy Milk');
    });
  });
});
