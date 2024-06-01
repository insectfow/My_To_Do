import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import SectionContainer from "../components/common/SectionContainer";
import Button from "../components/common/Button";

const TodoPage: FC = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    focusRef.current?.focus();
  }, [focusRef]);

  const handleSave = () => {
    const newTodo = { title, content, dueDate, completed: false };
    // Save the new todo item to local storage
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    // Clear the input fields
    setTitle("");
    setContent("");
    setDueDate("");

    navigate("/");
  };

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
        buttonText="Save"
        onClick={handleSave}
        disabled={isSaveButtonDisabled}
      />
    </Layout>
  );
};

export default TodoPage;
