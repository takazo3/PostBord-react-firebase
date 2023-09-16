import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import "./CreatePost.css";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const submit = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      content: content,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Post your story</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>Story</div>
          <textarea
            placeholder="Write your story"
            cols="30"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="postButton" onClick={submit}>
          Submit to Post
        </button>
      </div>
    </div>
  );
};
