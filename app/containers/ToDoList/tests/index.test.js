import React from 'react';
import { mount, shallow } from 'enzyme';

import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import { ToDoList } from '../index';

import * as actions from '../actions';


describe('<ToDoList />', () => {
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

  it('should render the todo input', () => {
    const renderedComponent = mount(
      <ToDoList tasks={state} actions={actions}/>
    );
    expect(renderedComponent.find(TodoInput).length).toBe(1);
  });

  it('should render the todo list', () => {
    const renderedComponent = mount(
      <ToDoList tasks={state} actions={actions}/>
    );
    expect(renderedComponent.find(TodoList).length).toBe(1);
  });
});
