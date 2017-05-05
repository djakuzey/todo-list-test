import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import TodoInput from 'components/TodoInput';
import TodoList  from 'components/TodoList';

import { makeSelectCurrentUser } from 'containers/App/selectors';

import { css } from 'aphrodite';
import styles from './style';
import { Icon } from 'react-fa';

import * as actions from './actions';


export class ToDoList extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const actions = this.props.actions;

    return (
      <div className={css(styles.todo_box)}>
        <TodoInput addTask={actions.addTask}/>

        <TodoList
          taskList={this.props.tasks}
          deleteTask={actions.deleteTask}
          toggleTask={actions.toggleTask}
          addSubTask={actions.addSubTask}
          deleteSubTask={actions.deleteSubTask}
          toggleSubTask={actions.toggleSubTask}
           />
      </div>
    );
  }
}

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id:       PropTypes.number,
      title:    PropTypes.string,
      isDone:   PropTypes.bool, 
      subtasks: PropTypes.arrayOf(
        PropTypes.shape({
          id:     PropTypes.number,
          title:  PropTypes.string,
          isDone: PropTypes.bool,
        })
      ),
    })
  ),
};

function mapStateToProps(state) {
  return {
    tasks: state.get('tasks'),
  };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ToDoList);
