import React, { Component } from 'react';
import { Task } from './Task';
import { TaskInput } from './TaskInput';
import './index.css';

class App extends Component {
  state = {
    tasks: [
      {id: 0, title: 'Create app', done: false},
      {id: 1, title: 'Add todos interactive', done: true},
      {id: 2, title: 'Migrate to MobX', done: false}
    ]
  };

  doneT = id => this.setState(({ tasks }) => {
    const newTasks = tasks.map(el => el.id === id ? {...el, done: true } : el );
    return {tasks: newTasks};
  });

  delT = id => this.setState(({ tasks }) => {
    const newTasks = tasks.filter(el => el.id !== id);
    return {tasks: newTasks};
  });

  addTask = text => this.setState(({ tasks }) => {
    return { tasks: [...tasks, {id: tasks.length, title: text, done: false}] }
  });
  
  render() {
    const { tasks } = this.state
    console.log('tasks:', tasks);
    
    const activeTasks = tasks.filter(el => !el.done);
    const doneTasks = tasks.filter(el => el.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => <Task task={task} key={task.id} doneT={this.doneT} delT={this.delT}/>)}
        <TaskInput addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
