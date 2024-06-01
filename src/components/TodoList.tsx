import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { TodoProps } from "../types/types";
import Button from "./common/Button";

dayjs.extend(isSameOrBefore);

const TodoList: FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const handleCheck = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  if (todos.length > 0) {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              className="input-checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(index)}
            />

            <strong
              className={`${
                !todo.completed &&
                todo.dueDate &&
                dayjs(todo.dueDate).isSameOrBefore(
                  dayjs().format("YYYY-MM-DD"),
                  "date"
                )
                  ? "overdue"
                  : ""
              }`}
            >
              <span>{todo.title}</span>
              {todo.dueDate && <span>{todo.dueDate}</span>}
            </strong>
            <Button
              buttonText="X"
              buttonClassName="delete-button"
              onClick={() => handleDelete(index)}
              disabled={false}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <div></div>;
};

export default TodoList;
