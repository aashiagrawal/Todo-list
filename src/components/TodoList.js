import { List } from "@material-ui/core";
import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removoeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}
