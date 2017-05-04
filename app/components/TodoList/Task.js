import React, { PropTypes } from 'react';

import { css } from 'aphrodite';
import styles from './styles';
import { Icon } from 'react-fa';

import Subtask from './Subtask';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      subtaskTitle: '',
    };
  }

  onCheck = event => {
    this.props.toggleTask(this.props.task.id);
  };

  onDelete = event => {
    this.props.deleteTask(this.props.task.id);
  }

  toggleInput = event => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  onChange = event => {
    this.setState({
      subtaskTitle: this.input.value,
    })
  }

  onSubmit = event => {
    this.props.addSubTask(this.props.task.id, this.state.subtaskTitle);

    this.toggleInput(event);

    this.setState({
      subtaskTitle: '',
    });
  };

  addSubtask = event => {
    this.props.addSubTask(this.props.task.id, this.state.subtaskTitle);
  }

  render() {
    const task = this.props.task;

    const showForm = this.state.showForm;

    let taskStyle = null;

    if (task.isDone) {
      taskStyle = css(styles.task_done);
    }

    return (
        <div className={css(styles.task)}>
          <div className={css(styles.main)}> 
            <span className={taskStyle}>{task.title}</span>
            <div>
              <button className={css(styles.btn_todo)}  onClick={this.onCheck}>
                <Icon  name="check"/>
              </button>
              <button className={css(styles.btn_todo)} onClick={this.onDelete}>
                <Icon  name="trash"/>
              </button>
              <button className={css(styles.btn_todo)} onClick={this.toggleInput}>
                <Icon  name="plus" />
              </button>
            </div>
          </div>
          <div className={css(styles.sub_task_list)}>
          {
            this.state.showForm ? 
            <div>
              <input
                className={css(styles.add_sub)}
                value={this.state.subtaskTitle}
                ref={input => this.input = input}
                onChange={this.onChange} />
              <button className={css(styles.btn_todo)} onClick={this.onSubmit}>
                Add a subtask
              </button>
            </div> 
            : null
          }
            
            {task.subtasks.map(subtask =>
              <Subtask 
                taskId={task.id}
                deleteSubTask={this.props.deleteSubTask} 
                toggleSubTask={this.props.toggleSubTask}
                key={subtask.id} subtask={subtask} />
            )}
          </div>
        </div>
      );
  }
}


