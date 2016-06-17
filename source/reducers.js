
import { combineReducers } from 'redux';
import { Map, List } from 'immutable';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = List.of(), action) {
  console.log('todo string', state.toString());
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
      return state.updateIn([action.index, 'completed'], (value) => !value);
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;

