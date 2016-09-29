import Todo from '../app/todo';
import renderer from 'react-test-renderer';
import React from 'react';

test('Todo component renders the todo correctly', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const rendered = renderer.create(
    <Todo todo={todo} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
