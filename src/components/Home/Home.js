import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import React, { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      // ここでデータを取得するコード
      const date = await getDocs(collection(db, "posts"));
      setPostList(date.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(date.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    // ここでデータを削除するコード
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="home">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postTitle">
              <h1>{post.title}</h1>
            </div>
            <div className="postContentContainer">{post.content}</div>
            <div className="nameAndDeleteBtn">
              <h3>{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
