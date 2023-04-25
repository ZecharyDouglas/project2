import { useState, useEffect } from "react";
import { store } from "../features/store";
import {
  setTitle,
  setContent,
  setNewPostId,
  setOriginallyPublished,
} from "../features/postContent";
import {
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../features/webPostsSlice";

const UpdatePost = () => {
  const { data, error } = useGetPostQuery(store.getState().postId.value);

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const [title, setNewTitle] = useState(data.title);
  const [body, setBody] = useState(data.content);
  useEffect(() => {
    setBody(data.content);
    setNewTitle(data.title);
  }, []);

  const changePost = () => {
    updatePost(store.getState().postContent);
  };
  const [postSubmission, setpostSubmission] = useState(2);

  return (
    <>
      <h1 class=" mb-6">Update Your Post</h1>
      <div>
        <label htmlFor="titleBox">Title: </label>
        <input
          class=" border-zinc-400 rounded-lg w-70 h-70 mb-5"
          type="text"
          value={title}
          id="titleBox"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="bodyBox">What's on your mind? </label>
        <input
          class=" border-zinc-400 rounded-lg w-70 h-70 mb-5"
          type="text"
          id="bodyBox"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className=" border p-4 shadow-lg rounded-lg bg-blue-200"
          onClick={() => {
            store.dispatch(setTitle(title));
            store.dispatch(setContent(body));
            store.dispatch(setNewPostId(data.id));
            store.dispatch(setOriginallyPublished(data.originally_published));
            changePost();
            setpostSubmission(1);
          }}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
      <div>
        {(() => {
          switch (postSubmission) {
            case 0:
              return (
                <p className="text-red-500">Post was updated unsucessful</p>
              );
            case 1:
              return (
                <p className="text-green-500">Posted Updated Sucessfully!</p>
              );
            default:
              return <p>Make A Change!</p>;
          }
        })()}
      </div>
    </>
  );
};
export default UpdatePost;
