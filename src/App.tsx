import React from "react";
import { Routes, Route } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import "./assets/scss/main.scss";

import Home from "./pages/home";
import Todo from "./pages/todo";
import NewTodo from "./pages/newTodo";
import Error from "./pages/error";

dayjs.locale("ko");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="/todo/new" element={<NewTodo />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
