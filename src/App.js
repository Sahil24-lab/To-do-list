import ToDoList from "./ToDoList";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Heading,
  Container,
  Box,
  Button,
  Input,
  Stack,
} from "@chakra-ui/react";

const LOCAL_STORAGE_KEY = "todosApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // This is only called the first time because the dependancies are empty []
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTodos);
    if (storedTodos.length > 0) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <Container>
      <Heading my="30px" textAlign="center">
        To Do List App
      </Heading>
      <Box my="30px" p="20px">
        <ToDoList todos={todos} toggleTodo={toggleTodo} />
      </Box>

      <Input ref={todoNameRef} size="md" />
      <Stack my="10px" direction="row" spacing={4} align="center">
        <Button colorScheme="teal" size="md" onClick={handleAddTodo}>
          Add Todo
        </Button>
        <Button colorScheme="teal" size="md" onClick={handleClearTodos}>
          Clear Completed
        </Button>
      </Stack>
      <div> {todos.filter((todo) => !todo.complete).length} left to do</div>
    </Container>
  );
}

export default App;
