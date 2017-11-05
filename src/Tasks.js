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
			return <div key={i}>{item}</div>
		})
		return (
			<div>
				<div>
					{listTasks}
					<br/>
				</div>
			</div>
		)
	}
}

export default Tasks;