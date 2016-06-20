
import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';
import {
  ADD_TODO,
  TOGGLE_TODO,
} from './actions';

function todos(state = List.of(), action) {
  switch (action.type) {
    case ADD_TODO:
      return state.push(
        Map({
          id: action.id,
          text: action.text,
          completed: false,
        })
      );
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.get('id') === action.id) {
          return todo.set('completed', !todo.get('completed'));
        }
        return todo;
      });
    default:
      return state;
  }
}

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'completed':
      return state.filter(t => (
        t.get('completed')
      ));
    case 'active':
      return state.filter(t => !t.get('completed'));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
});

export default todoApp;
