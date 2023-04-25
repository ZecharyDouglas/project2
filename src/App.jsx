import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAPost from "./pages/CreateAPost";
import SinglePost from "./pages/SinglePost";
import UpdatePost from "./pages/UpdatePost";
function App() {
  return (
    <>
      <div class=" mb-16 bg-blue-300 border rounded-lg text-left w-full h-14 pt-4 ml-0 shadow-lg">
        <Link
          class="m-5 p-2 text-slate-400 border rounded-3xl hover:bg-blue-100"
          to="/posts"
          
        >
          Home
        </Link>
        <Link
          class="m-5 p-2 text-slate-400 border rounded-3xl  hover:bg-blue-100"
          to="/createpost"
        >
          Create A Post
        </Link>
      </div>
      <Routes>
        <Route path="/posts" element={<Home />} />
        <Route path="/createpost" element={<CreateAPost />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/posts/:id/edit" element={<UpdatePost />} />
      </Routes>
    </>
  );
}

export default App;
