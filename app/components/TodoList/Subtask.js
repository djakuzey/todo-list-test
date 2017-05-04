import React, { PropTypes } from 'react';

import { css } from 'aphrodite';
import styles from './styles';
import { Icon } from 'react-fa';

export default class Subtask extends React.Component {

  onCheck = event => {
    this.props.toggleSubTask(
      this.props.taskId,
      this.props.subtask.id
    );
  }

  onDelete = event => {
    this.props.deleteSubTask(
      this.props.taskId,
      this.props.subtask.id
    );
  }

  render() {
    const subtask = this.props.subtask;

    let taskStyle = null;

    if (subtask.isDone) {
      taskStyle = css(styles.task_done);
    }

    return (
      <div className={css(styles.sub_task)}>
        <span className={taskStyle}>{subtask.title}</span>
        <div>
          <button
            className={css(styles.btn_todo)}
            onClick={this.onCheck}>
            <Icon  name="check" />
          </button>
          <button
            className={css(styles.btn_todo)}
            onClick={this.onDelete}>
            <Icon  name="trash"/>
          </button>
        </div>
      </div>
    );
  }
} 
