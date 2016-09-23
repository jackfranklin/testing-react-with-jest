import Todo from '../app/todo';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Todo component', () => {
  describe('Rendering the todo', () => {
    it('renders correctly', () => {
      const todo = { id: 1, done: false, name: 'Buy Milk' };
      const rendered = renderer.create(
        <Todo todo={todo} />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });

  // describe('toggling the todo', () => {
  //   it('calls the given doneChange callback prop', () => {
  //     const todo = { id: 1, done: false, name: 'Buy Milk' };
  //     const doneChange = jest.fn();
  //     const rendered = TestUtils.renderIntoDocument(
  //       <Todo todo={todo} doneChange={doneChange} />
  //     );

  //     const todoP = TestUtils.findRenderedDOMComponentWithClass(rendered, 'toggle-todo');
  //     TestUtils.Simulate.click(todoP);
  //     expect(doneChange).toBeCalledWith(1);
  //   });
  // });
});
