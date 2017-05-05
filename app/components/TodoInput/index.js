import React, { PropTypes } from 'react';

import { css } from 'aphrodite';
import styles from './styles';


export default class TodoInput extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			text: '',
		};
	}

	onChange = event => {
		this.setState({
			text: this.input.value,
		});
	}

	onSubmit = event => {
		event.preventDefault();

		if (this.state.text.length > 0)
			this.props.addTask(this.state.text);
		
		this.setState({
			text: ''
		})
	}

	render() {
		return (
			<form
				className={css(styles.create_task)}
				onSubmit={this.onSubmit} >
	          <input
	          	value={this.state.text}
	          	ref={input => this.input = input}
	          	className={css(styles.input_text)}
	          	onChange={this.onChange} />
	          <button
	          	onClick={this.onSubmit}
	          	className={css(styles.btn_todo)}>
	          	Add tasks
	          </button>
	        </form>
		);
	}
}
