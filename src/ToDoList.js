import React from "react";
import Todo from "./ToDo";
export default function ToDoList({ todos, toggleTodo }) {
  console.log("inside ToDoList");
  console.log(todos);
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
