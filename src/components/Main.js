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
    // eslint-disable-next-line react/no-unused-state
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({
      tasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
        newTask: '',
      });
    }
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
    const { tasks } = this.state;

    this.setState({
      // eslint-disable-next-line react/no-unused-state
      index,
      newTask: tasks[index],
    });
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
