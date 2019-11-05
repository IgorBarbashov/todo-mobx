import React, { Component } from "react";
import { Task } from "./Task";
import { TaskInput } from "./TaskInput";
import store from "./store";
import { observer } from "mobx-react";
import "./index.css";

const { addTask, delT, doneT } = store;
const bindAddTask = addTask.bind(store);
const bindDelT = delT.bind(store);
const bindDoneT = doneT.bind(store);

class App extends Component {
  render() {
    const { activeTasks, sortedTasks } = store;

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {sortedTasks.map(task => (
          <Task task={task} key={task.id} doneT={bindDoneT} delT={bindDelT} />
        ))}
        <TaskInput addTask={bindAddTask} />
      </div>
    );
  }
}

export default observer(App);
