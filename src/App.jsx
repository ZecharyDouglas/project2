import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div class=" bg-blue-300 border rounded-lg text-left w-full h-14 pt-4 ml-0">
        <Link class="m-5 text-slate-400">Hello</Link>
        <Link class="m-5 text-slate-400">Three </Link>
        <Link class="m-5 text-slate-400">Times</Link>
      </div>
      <Routes>
        <Route path="/" elemnt={<Home />} />
      </Routes>
    </>
  );
}

export default App;
