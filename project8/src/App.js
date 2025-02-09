import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";


function App() {

  //모든 게시글을 저장하는 상태
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <h1>미니 블로그📚</h1>
      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts} />} />
        <Route path="/post/:postId" element={<PostDetail posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
}

export default App;
