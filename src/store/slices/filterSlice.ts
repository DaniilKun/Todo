import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PriorityType = "all" | "low" | "medium" | "high";
export type SortOrderType = "desc" | "asc";

interface FilterState {
  priority: PriorityType;
  sortOrder: SortOrderType;
}

const initialState: FilterState = {
  priority: "all",
  sortOrder: "desc",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterPriority: (state, action: PayloadAction<PriorityType>) => {
      state.priority = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrderType>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setFilterPriority, setSortOrder } = filterSlice.actions;
export default filterSlice.reducer;