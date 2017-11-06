import React, { Component } from 'react';
import './App.css';
import CreateForm from './createForm.js';
import Tasks from './Tasks.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["Finish react.js homework."],
      modalUp: false,
      newMovieName: ''
    }
  }
  createTask = (task) => {
    const state = this.state;
    state.tasks.push(task);
    this.setState(state);
  }
  launchModal = (e) => {
    const selectedTask = e.currentTarget.innerHTML;
    const state = this.state;
    state.modalUp = !state.modalUp;
    state.newMovieName = selectedTask;
    this.setState(state);
  }
  submitEdit = (newTask) => {
    const state = this.state;
    for (let i = 0; i < this.state.tasks.length; i++){
      console.log(this.state.tasks.length);
      if (this.state.tasks[i] === this.state.newMovieName){
        state.tasks[i] = newTask;
      }
    }
    state.modalUp = !state.modalUp;
    state.newMovieName = '';
    this.setState(state);
  }
  removeTask = () => {
    const state = this.state;
    for (let i = 0; i < this.state.tasks.length; i++){
      console.log(this.state.tasks.length);
      if (this.state.tasks[i] === this.state.newMovieName){
        state.tasks.splice(i, 1);
      }
    }
    state.modalUp = !state.modalUp;
    state.newMovieName = '';
    this.setState(state);
  }
  render() {
    return (
      <div>
        <div>
          <header>
            <h1>My To-Do List</h1>
          </header>
        </div>
        <div>
          <Tasks tasks={this.state.tasks} launchModal={this.launchModal} modalUp={this.state.modalUp} submitEdit={this.submitEdit} removeTask={this.removeTask}/>
          <CreateForm createTask={this.createTask}/>
        </div>
      </div>
    );
  }
}

export default App;
