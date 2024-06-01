import React from "react";
import { Routes, Route } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import "./assets/scss/main.scss";

import Home from "./pages/home";
import Todo from "./pages/todo";

dayjs.locale("ko");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
