import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/taskSlice";
import { Form } from "../styles/StyledComponents";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const priorities: { value: "low" | "medium" | "high"; label: string }[] = [
    { value: "low", label: "Низкий" },
    { value: "medium", label: "Средний" },
    { value: "high", label: "Высокий" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Название задачи не может быть пустым!");
      return;
    }
    dispatch(addTask({ title: title.trim(), description: description.trim(), priority, createdAt: Date.now() }));
    setTitle("");
    setDescription("");
  };

  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }, []);

  const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as "low" | "medium" | "high");
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Название задачи" required />
      <textarea value={description} onChange={handleDescriptionChange} placeholder="Описание" />
      <select value={priority} onChange={handlePriorityChange}>
        {priorities.map((p) => (
          <option key={p.value} value={p.value}>{p.label}</option>
        ))}
      </select>
      <button type="submit">Добавить задачу</button>
    </Form>
  );
};

export default TaskForm;