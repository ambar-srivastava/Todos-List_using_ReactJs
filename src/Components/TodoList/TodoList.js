import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="container my-5">
      <h4 className="my-3">Todos List</h4>
      {props.todos.length === 0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default TodoList;
