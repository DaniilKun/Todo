import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import { Container } from "./styles/StyledComponents";
import AutoTaskGenerator from "./components/AutoTaskGenerator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { setFilterPriority, setSortOrder, PriorityType, SortOrderType } from "./store/slices/filterSlice";

const App: React.FC = () => {
  const filterPriority = useSelector<RootState, PriorityType>((state) => state.filters.priority);
  const sortOrder = useSelector<RootState, SortOrderType>((state) => state.filters.sortOrder);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskFilter
        filterPriority={filterPriority}
        setFilterPriority={(value) => dispatch(setFilterPriority(value as PriorityType))}
        sortOrder={sortOrder}
        setSortOrder={(value) => dispatch(setSortOrder(value as SortOrderType))}
      />
      <TaskList filterPriority={filterPriority} sortOrder={sortOrder} />
      <AutoTaskGenerator />
    </Container>
  );
};

export default App;