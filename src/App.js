import React, { Component } from 'react';
import './App.css';
import CreateForm from './createForm.js';
import Tasks from './Tasks.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["Finish react.js homework."]
    }
  }
  createTask = (task) => {
    const state = this.state;
    state.tasks.push(task);
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
          <Tasks tasks={this.state.tasks}/>
          <CreateForm createTask={this.createTask}/>
        </div>
      </div>
    );
  }
}

export default App;
