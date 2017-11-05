import React, { Component } from 'react';

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
		const state = this.state;
		e.preventDefault();
		console.log(this.props);
		this.props.createTask(state.inputValue);
		state.inputValue = '';
		this.setState(state);
	}
	render() {
		return (
			<form>
				<label>New Task</label>
					<textarea name="inputValue" onChange={this.handleInput} value={this.state.inputValue}/>
					<br/>
				<button onClick={this.handleSubmit}>Add</button>
			</form>
		)
	}
}

export default CreateForm;