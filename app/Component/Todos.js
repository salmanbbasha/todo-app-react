import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return (
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form />
          <List />
          <Filter />
        </div>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <form className="form">
        <input
          type="text"
          id="todo_input"
          autoComplete="off"
          placeholder="What needs to be done?"
          maxLength="36"
        />
        <button className="btn btn-clear">Add</button>
      </form>
    );
  }
}

const List = () => {
  return (
    <div className="todo-list-container">
      <ul>
        <li>
          <label className="label-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="todo">Taste JavaScript</span>
          </label>

          <button className="btn-delete"></button>
        </li>

        <li>
          <label className="label-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="todo">Taste JavaScript</span>
          </label>

          <button className="btn-delete"></button>
        </li>
      </ul>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>0</strong> item left
      </span>
      <div className="filters">
        <button className="btn-clear">All</button>

        <button className="btn-clear">Active</button>

        <button className="btn-clear">Completed</button>
      </div>

      <button className="btn-clear">Clear completed</button>
    </div>
  );
};

export default Todos;
