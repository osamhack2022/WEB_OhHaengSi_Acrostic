import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkMember } from "../../api/roster";

interface EditingHistory {}

interface RosterEditState {
  editingHistories: IWorkMember[];
}

const initialState = {
  editingHistories: [],
} as RosterEditState;

// Then, handle actions in your reducers:
const rosterEditSlice = createSlice({
  name: "rosterEdit",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    addHistory: (state, action: PayloadAction<IWorkMember>) => {
      const index = state.editingHistories.findIndex(
        (value) => value.rosterId == action.payload.rosterId
      );

      if (index == -1) {
        state.editingHistories.push(action.payload);
      } else {
        state.editingHistories[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addHistory, reset } = rosterEditSlice.actions;

export default rosterEditSlice.reducer;
