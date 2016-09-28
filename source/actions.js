import { v4 } from 'node-uuid';
import * as api from './api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const receiveTodos = (response, filter) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );

export function addTodo(text) {
  return { type: ADD_TODO, id: v4(), text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}
