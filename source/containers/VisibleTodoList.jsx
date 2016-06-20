import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => (
        t.get('completed')
      ));
    case 'active':
      return todos.filter(t => !t.get('completed'));
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.get('todos'), ownProps.filter),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
