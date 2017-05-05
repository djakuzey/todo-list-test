import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  ADD_SUB_TASK,
  TOGGLE_SUB_TASK,
  DELETE_SUB_TASK,
} from '../constants';

import {
  addTask,
  deleteTask,
  toggleTask,
  addSubTask,
  deleteSubTask,
  toggleSubTask
} from '../actions';

describe('ToDoList Actions', () => {
  describe('addTask', () => {
    it('should return the correct type and the passed title', () => {
      const titleTest = 'test';
      const expectedResult = {
        type: ADD_TASK,
        title: titleTest,
      };

      expect(addTask(titleTest)).toEqual(expectedResult);
    });
  });

  describe('deleteTask', () => {
    it('should return the correct type and the passed id of task', () => {
      const idTest = 0;
      const expectedResult = {
        type: DELETE_TASK,
        id: idTest,
      };

      expect(deleteTask(idTest)).toEqual(expectedResult);
    });
  });

  describe('toggleTask', () => {
    it('should return the correct type and the passed id of task', () => {
      const idTest = 0;
      const expectedResult = {
        type: TOGGLE_TASK,
        id: idTest,
      };

      expect(toggleTask(idTest)).toEqual(expectedResult);
    });
  });

  describe('addSubTask', () => {
    it('should return the correct type and the passed id of task and title of subtask', () => {
      const subTaskTitle = 'test';
      const taskId = 0;
      const expectedResult = {
        type: ADD_SUB_TASK,
        taskId,
        subTaskTitle,
      };

      expect(addSubTask(taskId, subTaskTitle)).toEqual(expectedResult);
    });
  });

  describe('deleteSubTask', () => {
    it('should return the correct type and the passed id of task and id of subtask', () => {
      const subtaskId = 0;
      const taskId = 0;
      const expectedResult = {
        type: DELETE_SUB_TASK,
        subtaskId,
        taskId,
      };

      expect(deleteSubTask(taskId, subtaskId)).toEqual(expectedResult);
    });
  });

  describe('toggleSubTask', () => {
    it('should return the correct type and the passed id of task and id of subtask', () => {
      const subtaskId = 0;
      const taskId = 0;
      const expectedResult = {
        type: TOGGLE_SUB_TASK,
        taskId,
        subtaskId,
      };

      expect(toggleSubTask(taskId, subtaskId)).toEqual(expectedResult);
    });
  });
});
