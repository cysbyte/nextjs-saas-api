"use client";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addVoice, deleteVoice } from "../store/slices/voiceSlice";
import styles from "./page.module.css";

import React, { useState } from "react";

const Voices = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddPost = (e: any) => {
    e.preventDefault();

    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    dispatch(addVoice(newPost));

    // Reset form fields
    setTitle("");
    setDescription("");
  };

    const handleRemovePost = (postId: any) => {
      console.log(postId)
    dispatch(deleteVoice(postId));
  };

  const voices = useSelector((state: any) => state.voices);
  console.log(voices);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleAddPost}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.button} onClick={handleAddPost}>
          Add New Post
        </button>
      </form>
      <h1 className={styles.heading}>Posts</h1>
      {voices ? (
        voices.map((post: any) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <button
              className={styles.deleteButton}
              onClick={() => handleRemovePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Voices;
