import React, { Component } from "react";
//Form
import { FaPlusCircle } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleEdit = (e, index) => {
    console.log('Edit: ', index);
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className='main'>
        <h1>To-do List</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlusCircle />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
