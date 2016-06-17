import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => {
        return t.get('completed');
      });
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.get('completed'));
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.get('todos'), state.get('visibilityFilter')),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
