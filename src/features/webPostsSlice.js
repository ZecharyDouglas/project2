import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/v1/api" }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),

    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["posts"],
    }),
    addPost: builder.mutation({
      query: (userpost) => ({
        url: "/posts",
        method: "POST",
        body: userpost,
      }),
      invalidatesTags: ["posts"],
    }),
    updatePost: builder.mutation({
      query: (userpost) => ({
        url: `/posts/${userpost.id}`,
        method: "PATCH",
        body: userpost,
      }),
      invalidatesTags: ["posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
