"use client";
import classes from "./NewPost.module.css";

function NewPost({ onBodyChange }: { onBodyChange: any }) {
  function handleBodyChange(e: any) {
    console.log(e.target.value);
  }
  return (
    <form action="" className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={onBodyChange} name="body" id="body" rows={10} />
      </p>
      <p>
        <label htmlFor="author">Your name</label>
        <input type="text" required />
      </p>
    </form>
  );
}

export default NewPost;
