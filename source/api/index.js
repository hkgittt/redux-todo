import { v4 } from 'node-uuid';
import { fromJS } from 'immutable';

const fakeDatabase = fromJS({
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
});

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.get('todos');
      case 'active':
        return fakeDatabase.get('todos').filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.get('todos').filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
