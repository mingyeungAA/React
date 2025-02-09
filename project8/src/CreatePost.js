import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost ({posts, setPosts}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleCreate = () => {
        if( !title.trim() || !content.trim() ) return;

        const newPost = {
            id: Date.now().toString(), //간단한 고유 id 생성
            title,
            content
        }

        setPosts([...posts, newPost]);
        navigate("/"); //등록 후 홈으로 이동
    }

    return (
        <div>
            <h1>글 등록</h1>
            <div>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{padding: '8px', width: "100%", marginBottom: "10px"}}
                />
            </div>
            <div>
                <textarea 
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{padding: "8px", width: "100%", height: "150px", marginBottom: "10px"}}
                />
            </div>
            <button onClick={handleCreate} style={{padding: "8px 12px"}}>등록</button>
        </div>
    )
}

export default CreatePost;