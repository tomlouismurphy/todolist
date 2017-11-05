import React, { Component } from 'react';
import './Tasks.css';

class Tasks extends Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		const listTasks = this.props.tasks.map((item, i) => {
			return <div className="taskForList" key={i}>{item}</div>
		})
		return (
			<div className="flex-container">
				{listTasks}
				<br/>
			</div>
		)
	}
}

export default Tasks;