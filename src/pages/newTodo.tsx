import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import SectionContainer from "../components/common/SectionContainer";
import Button from "../components/common/Button";
import { createTodo } from "../lib/todo";

const TodoPage: FC = () => {
  const navigate = useNavigate();

  const focusRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");

  const isSaveButtonDisabled = useMemo(() => {
    return !title || !content;
  }, [title, content]);

  useEffect(() => {
    focusRef.current?.focus();
  }, [focusRef]);

  const handleSave = async () => {
    let newTodo;
    const id = Math.floor(Math.random() * 1000000);
    newTodo = { title, content, dueDate, completed: false, id: id.toString() };

    try {
      await createTodo(newTodo);
      alert("Todo created successfully!");

      // Clear the input fields
      setTitle("");
      setContent("");
      setDueDate("");

      navigate("/");
    } catch (error) {
      alert("Failed to create todo.");
    }
  };

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
        buttonText={"Save"}
        onClick={handleSave}
        disabled={isSaveButtonDisabled}
      />
    </Layout>
  );
};

export default TodoPage;
