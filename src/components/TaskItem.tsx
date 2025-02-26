import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/slices/taskSlice';
import TaskEditForm from './TaskEditForm';
import { TaskContainer, BtnsGroup } from '../styles/StyledComponents';

interface TaskItemProps {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: number;
}

const priorityLabels: Record<TaskItemProps['priority'], string> = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
};

const TaskItem: React.FC<TaskItemProps> = ({ id, title, description, priority, createdAt }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleDelete = useCallback(() => {
    if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      dispatch(deleteTask(id));
    }
  }, [dispatch, id]);

  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(createdAt));

  return (
    <TaskContainer>
      {isEditing ? (
        <TaskEditForm
          id={id}
          title={title}
          description={description}
          priority={priority}
          createdAt={createdAt}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <h3>Название: {title}</h3>
          <p>Описание: {description}</p>
          <p>Приоритет: {priorityLabels[priority]}</p>
          <p>Создано: {formattedDate}</p>
          <BtnsGroup>
            <button onClick={handleEdit}>Редактировать</button>
            <button onClick={handleDelete}>Удалить</button>
          </BtnsGroup>
        </>
      )}
    </TaskContainer>
  );
};

export default TaskItem;