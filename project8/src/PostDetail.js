import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail({ posts, setPosts }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === postId);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  if (!post) {
    return <div style={{ padding: "20px" }}>게시글을 찾을 수 없습니다.</div>;
  }

  // 수정 저장
  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) return;

    const updatedPost = { ...post, title, content };
    setPosts(posts.map((p) => (p.id === postId ? updatedPost : p)));
    setIsEditing(false);
  };

  // 삭제
  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== postId));
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      {isEditing ? (
        <>
          <h1>글 수정</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: "8px", width: "100%", height: "150px", marginBottom: "10px" }}
          />
          <button onClick={handleUpdate} style={{ padding: "8px 12px" }}>저장</button>
          <button onClick={() => setIsEditing(false)} style={{ padding: "8px 12px", marginLeft: "10px" }}>
            취소
          </button>
        </>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={() => setIsEditing(true)} style={{ padding: "8px 12px" }}>수정</button>
          <button onClick={handleDelete} style={{ padding: "8px 12px", marginLeft: "10px", color: "red" }}>
            삭제
          </button>
          <button onClick={() => navigate("/")} style={{ padding: "8px 12px", marginLeft: "10px" }}>
            목록으로
          </button>
        </>
      )}
    </div>
  );
}

export default PostDetail;
