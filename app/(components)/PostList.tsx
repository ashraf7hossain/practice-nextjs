"use client";
import { useState } from "react";
import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList() {
  const [enterBody, setEnterBody] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleBodyChange(e: any) {
    setEnterBody(e.target.value);
  }
  function hideModal() {
    setIsOpen(false);
  }
  function showModal() {
    setIsOpen(true);
  }
  return (
    <>
      {isOpen && (
        <Modal onClose={hideModal}>
          <NewPost onBodyChange={handleBodyChange} />
        </Modal>
      )}
      <button onClick={showModal}>Open</button>
      <ul className={classes.posts}>
        <Post author="Ashraf hossain" body={enterBody} />
        <Post author="Ashraf hossain" body="This is my second post" />
        <Post author="Ashraf hossain" body="This is my third post" />
        <Post author="Ashraf hossain" body="This is my fourth post" />
      </ul>
    </>
  );
}

export default PostList;
