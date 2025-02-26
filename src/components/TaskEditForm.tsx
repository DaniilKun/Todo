import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store/slices/taskSlice';
import { BtnsGroup, FormContainer, Label, Title } from '../styles/StyledComponents';

interface TaskEditFormProps {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  createdAt: number;
  setIsEditing: (value: boolean) => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({
  id,
  title,
  description,
  priority,
  createdAt,
  setIsEditing,
}) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPriority, setEditedPriority] = useState<"low" | "medium" | "high">(priority);

  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedDescription(e.target.value);
  }, []);

  const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedPriority(e.target.value as "low" | "medium" | "high");
  }, []);

  const handleSave = () => {
    if (!editedTitle.trim()) {
      alert("Название не может быть пустым!");
      return;
    }

    dispatch(
      editTask({
        id,
        title: editedTitle.trim(),
        description: editedDescription.trim(),
        priority: editedPriority,
        createdAt,
      })
    );
    setIsEditing(false);
  };

  return (
    <FormContainer>
      <Title>Редактирование задачи</Title>
      <Label>Название:</Label>
      <input type="text" value={editedTitle} onChange={handleTitleChange} />
      <Label>Описание:</Label>
      <textarea value={editedDescription} onChange={handleDescriptionChange} />
      <Label>Приоритет:</Label>
      <select value={editedPriority} onChange={handlePriorityChange}>
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      <BtnsGroup>
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={() => setIsEditing(false)}>Отмена</button>
      </BtnsGroup>
    </FormContainer>
  );
};

export default TaskEditForm;
