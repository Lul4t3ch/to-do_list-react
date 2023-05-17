import React, { Component } from "react";
//Form
import { FaPlusCircle } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Make coffee',
      'Drink water',
      'Gyn',
      'College assignment',
      'Reading',
      'Listening',
      'Journalling',
    ],
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className='main'>
        <h1>To-do List</h1>

        <form action="#" className="form">
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
          {tasks.map(task => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
