import React, { Component } from 'react';
import uniqid from 'uniqid';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      taskName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.taskName !== '') {
      this.props.onHandleSubmit({
        id: uniqid('todo-'),
        task: this.state.taskName,
        completed: false
      });

      this.setState({
        taskName: ''
      });
    }
  }
  render() {
    const { taskName } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="todo_input"
          autoComplete="off"
          placeholder="What needs to be done?"
          maxLength="24"
          value={taskName}
          onChange={event => this.handleChange(event)}
        />
      </form>
    );
  }
}

export default Form;
