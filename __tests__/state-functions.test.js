import { toggleDone, deleteTodo } from "../app/state-functions";

test("tooggleDone completes an incomplete todo", () => {
  const startState = [{ id: 1, done: false, text: "Buy Milk" }];

  const finState = toggleDone(startState, 1);

  expect(finState).toEqual([{ id: 1, done: true, text: "Buy Milk" }]);
});

test("deleteTodo deletes the todo it is given", () => {
  const startState = [{ id: 1, done: false, text: "Buy Milk" }];

  const finState = deleteTodo(startState, 1);

  expect(finState).toEqual([]);
});
