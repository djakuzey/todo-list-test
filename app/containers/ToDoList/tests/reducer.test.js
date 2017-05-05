import { fromJS } from 'immutable';

import todoReducer from '../reducer';
import {
  addTask,
  deleteTask,
  toggleTask,
  addSubTask,
  deleteSubTask,
  toggleSubTask
} from '../actions';

describe('todoReducer', () => {
  let state;
  beforeEach(() => {
    state = [
      {
        id: 0,
        title: 'hello',
        isDone: false,
        subtasks: [{
          id: 5,
          title: 'hello',
          isDone: false,
        }],
      },

      {
        id: 1,
        title: 'test',
        isDone: true,
        subtasks: [],
      },
    ];
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(todoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the addTask action correctly', () => {
    const title = 'test';

    const expectedResult = [
        ...state,
        {
          id: Date.now() + 1,
          title: title,
          isDone: false,
          subtasks: [],
        }
      ];

    expect(todoReducer(state, addTask(title))).toEqual(expectedResult);
  });

  it('should handle the deleteTask action correctly', () => {
    const testId = 0;
    const expectedResult = state.filter(
        task => task.id !== testId
      );

    expect(todoReducer(state, deleteTask(testId))).toEqual(expectedResult);
  });

  it('should handle the toggleTask action correctly', () => {
    const testId = 0;
    const expectedResult = state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.id === testId ? !task.isDone : task.isDone,
        subtasks: task.subtasks.map(subtask => ({
          id: subtask.id,
          title: subtask.title,
          isDone: task.id === testId ? !task.isDone : task.isDone,
        })),
      }));

    expect(todoReducer(state, toggleTask(testId))).toEqual(expectedResult);
  });

  it('should handle the addSubTask action correctly', () => {
    const testId = 0;
    const testTitle = 'test';
    const expectedResult = state.map(task => ({
        subtasks: testId === task.id ?
        [
          ...task.subtasks,
          {
            id: Date.now() + 1,
            title: testTitle,
            isDone: false,
          }
        ] :
        task.subtasks,
        id: task.id,
        title: task.title,
        isDone: task.isDone,
      }));

    expect(todoReducer(state, addSubTask(testId, testTitle))).toEqual(expectedResult);
  });

  it('should handle the deleteSubTask action correctly', () => {
    const testId = 0;
    const secondTestId = 5;
    const expectedResult = state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        subtasks: task.id === testId ?
          task.subtasks.filter(subtask => 
            subtask.id !== secondTestId
          ) :
          task.subtasks,
      }));

    expect(todoReducer(state, deleteSubTask(testId, secondTestId))).toEqual(expectedResult);
  });

  it('should handle the toggleSubTask action correctly', () => {
    const testId = 0;
    const secondTestId = 5;
    const expectedResult = state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        subtasks: task.id === testId ?
          task.subtasks.map(subtask => {
            if (subtask.id === secondTestId) {
              return {
                id: subtask.id,
                title: subtask.title,
                isDone: !subtask.isDone,
              };
            }

            return subtask;
          }) :
          task.subtasks,
      }));

    expect(todoReducer(state, toggleSubTask(testId, secondTestId))).toEqual(expectedResult);
  });

 
});
