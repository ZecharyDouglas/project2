import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const postIdSlice = createSlice({
  name: "postId",
  initialState: initialState,
  reducers: {
    setId: (state, action) => {
      state.value = action.payload;
    },
    getId: (state, action) => {
      return state.value;
    },
  },
});

export const { setId, getId } = postIdSlice.actions;
export default postIdSlice.reducer;
