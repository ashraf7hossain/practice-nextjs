"use client";
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }: { onCancel: any, onAddPost: any }) {
  const [enterAuther, setEnterAuther] = useState<string>("");
  const [enterBody, setEnterBody] = useState<string>("");
  function handleBodyChange(e: any) {
    setEnterBody(e.target.value);
  }

  function handleAuthChange(e: any) {
    setEnterAuther(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    const postData = {
      body: enterBody,
      author: enterAuther
    }
    onAddPost(postData);
    onCancel();
  }

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={handleBodyChange} name="body" id="body" rows={10} />
      </p>
      <p>
        <label htmlFor="author">Your name</label>
        <input onChange={handleAuthChange} type="text" required />
      </p>
      <p className={classes.actions}>
        <button type="submit">Cancel</button>
        <button type="submit">Post</button>
      </p>
    </form>
  );
}

export default NewPost;
