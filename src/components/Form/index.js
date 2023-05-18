import React from "react";
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';
import './Form.css';

export default function Form({ handleInputChange, handleSubmit, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleInputChange}
        type="text"
        value={newTask}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
