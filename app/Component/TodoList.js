import React from 'react';

const TodoList = props => {
  return (
    <div className="todo-list-container">
      <ul>
        {props.filter === 'All' &&
          props.todos.map(todo => (
            <li key={todo.id}>
              <label className="label-container">
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onChange={() =>
                    props.onHandleComplete(todo.id, todo.completed)
                  }
                />
                <span className="checkmark"></span>
                <span className="todo">{todo.task}</span>
              </label>

              <button
                className="btn-delete"
                onClick={() => props.onHandleDelete(todo.id)}
              ></button>
            </li>
          ))}

        {props.filter === 'Active' &&
          props.todos
            .filter(todo => todo.completed !== true)
            .map(filteredTodo => (
              <li key={filteredTodo.id}>
                <label className="label-container">
                  <input
                    type="checkbox"
                    defaultChecked={filteredTodo.completed}
                    onChange={() =>
                      props.onHandleComplete(
                        filteredTodo.id,
                        filteredTodo.completed
                      )
                    }
                  />
                  <span className="checkmark"></span>
                  <span className="todo">{filteredTodo.task}</span>
                </label>

                <button
                  className="btn-delete"
                  onClick={() => props.onHandleDelete(filteredTodo.id)}
                ></button>
              </li>
            ))}

        {props.filter === 'Completed' &&
          props.todos
            .filter(todo => todo.completed !== false)
            .map(filteredTodo => (
              <li key={filteredTodo.id}>
                <label className="label-container">
                  <input
                    type="checkbox"
                    defaultChecked={filteredTodo.completed}
                    onChange={() =>
                      props.onHandleComplete(
                        filteredTodo.id,
                        filteredTodo.completed
                      )
                    }
                  />
                  <span className="checkmark"></span>
                  <span className="todo">{filteredTodo.task}</span>
                </label>

                <button
                  className="btn-delete"
                  onClick={() => props.onHandleDelete(filteredTodo.id)}
                ></button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
