import React from 'react';
import { render, shallow } from 'enzyme';

import TodoInput from '../index';
import { addTask } from 'containers/ToDoList/actions';

describe('<TodoInput />', () => {
  it('should set empty state', () => {
    const renderedComponent = shallow(
      <TodoInput addTask={addTask} />
    );

    expect(renderedComponent.state().text).toEqual('');
  });
  
   it('should render form', () => {
    const renderedComponent = render(
      <TodoInput addTask={addTask} />
    );
    expect(renderedComponent.find('form').length).toBe(1);
  });

});
