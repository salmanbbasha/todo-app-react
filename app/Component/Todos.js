import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Filter from './Filter';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 'todo-ldlm73jq', task: 'pay wifi bill', completed: true },
        { id: 'todo-ldlm53fs', task: 'read a book', completed: true },
        { id: 'todo-ldlmfb1q', task: 'push code to github', completed: true },
        { id: 'todo-ldlm21fd', task: 'buy eggs', completed: false },
        { id: 'todo-ldlm7abs', task: 'Hit the Gym', completed: false }
      ],
      filter: 'All'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(newTask) {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  handleDelete(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  handleComplete(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  }

  handleFilter(value) {
    this.setState({
      filter: value
    });
  }

  handleClear() {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed !== true)
    });
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form todos={todos} onHandleSubmit={this.handleSubmit} />
          <TodoList
            todos={todos}
            filter={filter}
            onHandleDelete={this.handleDelete}
            onHandleComplete={this.handleComplete}
          />
          <Filter
            todos={todos}
            filter={filter}
            onHandleFilter={this.handleFilter}
            onHandleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
