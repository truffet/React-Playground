export const ADD_TODO = 'ADD_TODO'

let n = 0;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: n++,
    text
  };
}
