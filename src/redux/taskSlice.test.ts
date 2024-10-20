import taskReducer, {addTask} from './taskSlice';

describe('taskSlice', () => {
  const initialState = {
    tasks: [],
  };

  test('should handle initial state', () => {
    expect(taskReducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  test('should handle adding a task', () => {
    const actual = taskReducer(initialState, addTask('New Task'));
    expect(actual.tasks).toHaveLength(1);
    expect(actual.tasks[0].description).toEqual('New Task');
  });
});
