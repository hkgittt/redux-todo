import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;
const getCounter = state => state.counter;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    console.log('inside getVisibleTodos');
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);

export const doubleCount = createSelector(
  getCounter,
  count => 2 * count
);
