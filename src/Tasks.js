import React, { Component } from 'react';
import './Tasks.css';

class Tasks extends Component {
	constructor() {
		super();
		this.state = {
			newMovieName: ''
		}
	}
	editText = (e) => {
		const state = this.state;
		state.newMovieName = e.currentTarget.value;
		console.log(state.newMovieName);
		this.setState(state);
	}
	newEdit = () => {
		this.props.submitEdit(this.state.newMovieName);
	}
	render() {
		const listTasks = this.props.tasks.map((item, i) => {
			return <div className="taskForList" key={i} onClick={this.props.launchModal}><p>{item}</p></div>
		})
		const editClass = this.props.modalUp ? 'modal-shown' : 'modal'
		return (
			<div>
				<div className="flex-container">
					{listTasks}
					<br/>
				</div>
				<div className={editClass}>
					<div className="modal-content">
			              <span className="close" id="closeModal">&times;</span>
			      			<p className="taskData">Placeholder text.</p>
			              <input type="text" value={this.state.newMovieName} onChange={this.editText}/>
			              <button onClick={this.newEdit}>Submit</button>
	            	</div>
				</div>
			</div>
		)
	}
}

export default Tasks;