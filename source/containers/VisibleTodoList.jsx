import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('GETTING VISIBLETODOS');
  console.log(todos, filter);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => {
        console.log(t);
        return t.completed;
      });
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
