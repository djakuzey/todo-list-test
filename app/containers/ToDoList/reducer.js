import { fromJS } from 'immutable';

import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  ADD_SUB_TASK,
  TOGGLE_SUB_TASK,
  DELETE_SUB_TASK,
} from './constants';


const initialState = [
  {
    id: 0,
    title: 'hello',
    isDone: false,
    subtasks: [],
  },

  {
    id: 1,
    title: 'test',
    isDone: true,
    subtasks: [],
  },
];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          isDone: false,
          subtasks: [],
        }
      ];

    case DELETE_TASK:
      return state.filter(
        task => task.id !== action.id
      );

    case TOGGLE_TASK:
      return state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.id === action.id ? !task.isDone : task.isDone,
        subtasks: task.subtasks.map(subtask => ({
          id: subtask.id,
          title: subtask.title,
          isDone: task.id === action.id ? !task.isDone : task.isDone,
        })),
      }));

    case ADD_SUB_TASK:
      return state.map(task => ({
        subtasks: action.taskId === task.id ?
        [
          ...task.subtasks,
          {
            id: Date.now(),
            title: action.subTaskTitle,
            isDone: false,
          }
        ] :
        task.subtasks,
        id: task.id,
        title: task.title,
        isDone: task.isDone,

      }));

    case DELETE_SUB_TASK:
      return state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        subtasks: task.id === action.taskId ?
          task.subtasks.filter(subtask => 
            subtask.id !== action.subtaskId
          ) :
          task.subtasks,
      }));

    case TOGGLE_SUB_TASK:
      return state.map(task => ({
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        subtasks: task.id === action.taskId ?
          task.subtasks.map(subtask => {
            if (subtask.id === action.subtaskId) {
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

    default:
      return state;
  }
}

export default todoReducer;
