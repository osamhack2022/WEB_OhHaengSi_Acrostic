import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSoldiers, Soldier } from "../../api/soldiers";
import { RootState } from "../store";

// First, create the thunk
export const fetchSoldiers = createAsyncThunk<
  Soldier[],
  void,
  { state: RootState }
>(
  "soldiers/getSoliders",
  async (_, { getState }) => {
    const response = await getSoldiers();
    return response;
  },
  {
    condition: (_, { getState, extra }) => {
      const { soldiers } = getState();
      const fetchStatus = soldiers.loading;

      if (fetchStatus === "succeeded" || fetchStatus === "pending") {
        // Already fetched or in progress, don't need to re-fetch

        return false;
      }
    },
  }
);

interface SoldiersState {
  soldiers: Soldier[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  soldiers: [],
  loading: "idle",
} as SoldiersState;

// Then, handle actions in your reducers:
const soldiersSlice = createSlice({
  name: "soldiers",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchSoldiers.fulfilled, (state, action) => {
        // Add user to the state array
        state.soldiers = action.payload;
      })
      .addCase(fetchSoldiers.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(fetchSoldiers.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
        }
      });
  },
});

export default soldiersSlice.reducer;
