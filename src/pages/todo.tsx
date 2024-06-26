import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import SectionContainer from "../components/common/SectionContainer";
import Button from "../components/common/Button";

import { getTodo, updateTodo } from "../lib/todo";
import { TodoProps } from "../types/types";

const TodoPage: FC = () => {
  const params = useParams();
  const todoId = params.id;
  const focusRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState<TodoProps | null>(null);
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async (id: string) => {
      if (!id) return;

      try {
        const todo = await getTodo(id);
        setTitle(todo.title);
        setContent(todo.content);
        setDueDate(todo.dueDate);
        setTodo(todo);
      } catch (err) {
        navigate("/error");
      }
    };

    if (todoId) {
      fetchTodo(todoId);
    }
    focusRef.current?.focus();
  }, [todoId, focusRef, navigate]);

  useEffect(() => {
    focusRef.current?.focus();
  }, [focusRef]);

  const handleSave = useCallback(() => {
    if (!todo) return;
    try {
      updateTodo({
        ...todo,
        title,
        content,
        dueDate,
      });

      alert("Todo updated successfully!");

      // Clear the input fields
      setTitle("");
      setContent("");
      setDueDate("");
      navigate("/");
    } catch (error) {
      alert("Failed to update todo.");
    }
  }, [todo, title, content, dueDate, navigate]);

  const isSaveButtonDisabled = !title || !content;
  return (
    <Layout title={"To Do"}>
      <SectionContainer sectionTitle="제목">
        <input
          ref={focusRef}
          type="text"
          value={title}
          className="input-text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </SectionContainer>
      <SectionContainer sectionTitle="내용">
        <textarea
          value={content}
          className="input-textarea"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </SectionContainer>
      <SectionContainer sectionTitle="Due Date (Option)">
        <input
          type="date"
          value={dueDate}
          className="input-date"
          onChange={(e) => setDueDate(e.target.value)}
        />
      </SectionContainer>
      <Button
        buttonText={"Update"}
        onClick={handleSave}
        disabled={isSaveButtonDisabled}
      />
    </Layout>
  );
};
export default TodoPage;
