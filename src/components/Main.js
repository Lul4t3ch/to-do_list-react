import React, { Component } from "react";
import { FaPlusCircle } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className='main'>
        <h1>To-do List</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlusCircle />
          </button>
        </form>
      </div>
    );
  }
}
