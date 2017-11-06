import React, { Component } from 'react';
import './createForm.css';

class CreateForm extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: ''
		}
	}
	handleInput = (e) => {
		const state = this.state;
		state.inputValue = e.currentTarget.value;
		this.setState(state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.props);
		this.props.createTask(this.state.inputValue);
		const state = this.state;
		state.inputValue = '';
		this.setState(state);
	}
	render() {
		return (
			<form id="newTaskForm">
				<label id="formTitle">Add New Task</label>
					<br/>
					<textarea id="newTask" name="inputValue" onChange={this.handleInput} value={this.state.inputValue}/>
					<br/>
				<button id="submit" onClick={this.handleSubmit}>Add</button>
			</form>
		)
	}
}

export default CreateForm;