import React, { useCallback } from "react";
import { Sort } from "../styles/StyledComponents";

interface TaskFilterProps {
  filterPriority: "all" | "low" | "medium" | "high";
  setFilterPriority: (value: "all" | "low" | "medium" | "high") => void;
  sortOrder: "desc" | "asc";
  setSortOrder: (value: "desc" | "asc") => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filterPriority, setFilterPriority, sortOrder, setSortOrder }) => {
  const handlePriorityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterPriority(e.target.value as "all" | "low" | "medium" | "high");
    },
    [setFilterPriority]
  );

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOrder(e.target.value as "desc" | "asc");
    },
    [setSortOrder]
  );

  return (
    <Sort>
      <label>Фильтр по приоритету: </label>
      <select value={filterPriority} onChange={handlePriorityChange}>
        <option value="all">Все</option>
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
      </select>
      <label> Сортировка по дате: </label>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="desc">Сначала новые</option>
        <option value="asc">Сначала старые</option>
      </select>
    </Sort>
  );
};

export default TaskFilter;