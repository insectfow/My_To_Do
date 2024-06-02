import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { TodoProps } from "../types/types";
import Button from "./common/Button";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodo, updateTodo } from "../lib/todo";

dayjs.extend(isSameOrBefore);

const TodoList: FC = () => {
  const navigator = useNavigate();
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTodo = async () => {
    try {
      const todoData = await getTodo();
      setTodos(todoData);
    } catch (err) {
      setError("Todo 리스트를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleCheck = async (targetItem: TodoProps) => {
    try {
      await updateTodo({
        ...targetItem,
        completed: !targetItem.completed,
      });
      await fetchTodo();
    } catch (error) {
      alert("Failed to update todo.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      alert("Todo deleted successfully!");
      await fetchTodo();
    } catch (error) {
      alert("Error deleting todo");
    }
  };

  if (error) {
    return <div className="error-box">Error: {error}</div>;
  }

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
              onChange={() => handleCheck(todo)}
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
              <button
                type="button"
                className="todo-title"
                onClick={() => {
                  navigator("todo/" + todo.id);
                }}
              >
                {todo.title}
              </button>

              {todo.dueDate && (
                <span className="todo-duedate">due date: {todo.dueDate}</span>
              )}
            </strong>
            <Button
              buttonText="X"
              buttonClassName="delete-button"
              onClick={() => handleDelete(todo.id)}
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
