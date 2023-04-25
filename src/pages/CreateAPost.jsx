import { useState } from "react";
import { store } from "../features/store";
import { setTitle, setContent, setNewPostId } from "../features/postContent";
import {
  useGetPostsQuery,
  useAddPostMutation,
} from "../features/webPostsSlice";

const CreateAPost = () => {
  const [userTitle, setUserPostTitle] = useState("");
  const [userBody, setUserPostBody] = useState("");
  const { data } = useGetPostsQuery();

  const [addPost, { isLoading }] = useAddPostMutation();

  const createPost = () => {
    addPost(store.getState().postContent);
  };
  const [postSubmission, setpostSubmission] = useState(2);

  return (
    <>
      <h1 className=" mb-6">Share your thoughts below</h1>
      <div>
        <label htmlFor="titleBox">Title: </label>
        <input
          class=" border-zinc-400 rounded-lg w-70 h-70 mb-5"
          type="text"
          id="titleBox"
          onChange={(e) => {
            setUserPostTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="bodyBox">What's on your mind? </label>
        <input
          class=" border-zinc-400 rounded-lg w-70 h-70 mb-5"
          type="text"
          id="bodyBox"
          onChange={(e) => {
            setUserPostBody(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className=" border p-4 shadow-lg rounded-lg bg-blue-200"
          onClick={() => {
            store.dispatch(setTitle(userTitle));
            store.dispatch(setContent(userBody));
            store.dispatch(setNewPostId(data.length));
            createPost();
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
              return <p className="text-red-500">Post was unsucessful</p>;
            case 1:
              return <p className="text-green-500">Posted Sucessfully!</p>;
            default:
              return <p>Post Something!</p>;
          }
        })()}
      </div>
    </>
  );
};
export default CreateAPost;
