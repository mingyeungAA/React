import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home ({posts, setPosts}) {
    const [searchTerm, setSearchTerm ] = useState("");

    const filterPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{padding: "20px"}}>
            <h1>글 목록</h1>
            <div>
                <input 
                    type="text"
                    placeholder="검색,,"
                    valuee={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{padding:"8px", width:"200px"}}
                />
                {/* 글 작성 페이지로 이동 */}
                <Link to="/create">
                    <button style={{marginLeft:"10px", padding:"8px 12px"}}>글 등록</button>
                </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0}}>
                {filterPosts.length === 0 ? (
                    <p>작성된 글이 없습니다.</p>
                ) : (
                    filterPosts.map((post) => (
                        <li key={post.id} style={{marginBottom:'10px'}}>
                            {/* 글 제목을 클릭하면 해당 글 상세 페이지로 이동 */}
                            <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "blue"}}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Home;