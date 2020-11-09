import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="container text-center py-1">
      <Header title="Todo List" subtitle="By CS Club" />
      <TodoList title="Homework" />
      <TodoList title="Grocery" />
    </div>
  );
}
