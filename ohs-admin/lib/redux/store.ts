import { configureStore } from "@reduxjs/toolkit";
import rosterEditSlice from "./roster/rosterEditSlice";
import soldierReducer from "./soldiers/soldierSlice";

export const store = configureStore({
  reducer: {
    soldiers: soldierReducer,
    rosterEdit: rosterEditSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
