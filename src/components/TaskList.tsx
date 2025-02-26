import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskItem from "./TaskItem";
import { PriorityType, SortOrderType } from "../store/slices/filterSlice";
import { EmptyMessage, TaskListContainer } from "../styles/StyledComponents";

interface TaskListProps {
  filterPriority: PriorityType;
  sortOrder: SortOrderType;
}

const TaskList: React.FC<TaskListProps> = ({ filterPriority, sortOrder }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => filterPriority === "all" || task.priority === filterPriority);
  }, [tasks, filterPriority]);

  const sortedTasks = useMemo(() => {
    return [...filteredTasks].sort((a, b) => 
      sortOrder === "desc" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt
    );
  }, [filteredTasks, sortOrder]);

  return (
    <TaskListContainer>
      {sortedTasks.length > 0 ? (
        sortedTasks.map((task) => <TaskItem key={task.id} {...task} />)
      ) : (
        <EmptyMessage>Извините, но задач пока нет</EmptyMessage>
      )}
    </TaskListContainer>
  );
};

export default TaskList;