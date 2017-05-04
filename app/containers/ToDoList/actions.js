import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  ADD_SUB_TASK,
  TOGGLE_SUB_TASK,
  DELETE_SUB_TASK,
} from './constants';

export function addTask(title) {
  return {
    type: ADD_TASK,
    title: title,
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id,
  }
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id,
  }
}

export function addSubTask(taskId, subTaskTitle) {
  return {
    type: ADD_SUB_TASK,
    taskId,
    subTaskTitle,
  }
}

export function deleteSubTask(taskId, subtaskId) {
  return {
    type: DELETE_SUB_TASK,
    taskId,
    subtaskId,
  }
}

export function toggleSubTask(taskId, subtaskId) {
  return {
    type: TOGGLE_SUB_TASK,
    taskId,
    subtaskId,
  }
}
