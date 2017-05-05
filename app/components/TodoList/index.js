import React, { PropTypes } from 'react';

import { css } from 'aphrodite';
import styles from './styles';
import { Icon } from 'react-fa';

import Task from './Task';

const TodoList = props => (
	<div className={css(styles.task_list)}>
	    {props.taskList.map(
	      task =>
	    <Task key={task.id} task={task} {...props} />)}
	</div>
);

export default TodoList;
