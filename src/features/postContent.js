import { createSlice } from "@reduxjs/toolkit";

export const postContent = createSlice({
  name: "postContent",
  initialState: {
    id: 0,
    title: "",
    content: "",
    originally_published: "",
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setNewPostId: (state, action) => {
      state.id = action.payload;
    },
    setOriginallyPublished: (state, action) => {
      state.originally_published = action.payload;
    },
  },
});

export const { setContent, setTitle, setNewPostId, setOriginallyPublished } =
  postContent.actions;
export default postContent.reducer;
