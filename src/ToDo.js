import React from "react";
import { Checkbox } from "@chakra-ui/react";

export default function ToDo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <Checkbox
        iconSize="3rem"
        checked={todo.complete}
        onChange={handleTodoClick}
      >
        {todo.name}
      </Checkbox>
    </div>
  );
}
