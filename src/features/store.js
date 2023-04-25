import { configureStore } from "@reduxjs/toolkit";
import { postIdSlice } from "./postIdSlice";
import { postsApi } from "./webPostsSlice";
import { postContent } from "./postContent";
import { setupListeners } from "@reduxjs/toolkit/query";

/* export const reducer = {
  //postsApi: postsApi.reducer,
  postId: postIdSlice.reducer,
}; */

export const store = configureStore({
  reducer: {
    postId: postIdSlice.reducer,
    postContent: postContent.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
setupListeners(store.dispatch);
