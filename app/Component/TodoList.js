import React from 'react';

function List({ Todo, onHandleDelete, onHandleComplete }) {
  return (
    <li>
      <label className="label-container">
        <input
          type="checkbox"
          defaultChecked={Todo.completed}
          onChange={() => onHandleComplete(Todo.id, Todo.completed)}
        />
        <span className="checkmark"></span>
        <span className="todo">{Todo.task}</span>
      </label>

      <button
        className="btn-delete"
        onClick={() => onHandleDelete(Todo.id)}
      ></button>
    </li>
  );
}

const TodoList = props => {
  return (
    <div className="todo-list-container">
      <ul>
        {props.filter === 'All' &&
          props.todos.map(todo => (
            <List
              key={todo.id}
              Todo={todo}
              onHandleDelete={props.onHandleDelete}
              onHandleComplete={props.onHandleComplete}
            />
          ))}

        {props.filter === 'Active' &&
          props.todos
            .filter(todo => todo.completed !== true)
            .map(filteredTodo => (
              <List
                key={filteredTodo.id}
                Todo={filteredTodo}
                onHandleDelete={props.onHandleDelete}
                onHandleComplete={props.onHandleComplete}
              />
            ))}

        {props.filter === 'Completed' &&
          props.todos
            .filter(todo => todo.completed !== false)
            .map(filteredTodo => (
              <List
                key={filteredTodo.id}
                Todo={filteredTodo}
                onHandleDelete={props.onHandleDelete}
                onHandleComplete={props.onHandleComplete}
              />
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
