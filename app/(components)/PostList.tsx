"use client";
import { useState } from "react";
import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({
  isPosting,
  onStopPosting,
}: {
  isPosting: boolean;
  onStopPosting: any;
}) {
  const [posts, setPosts] = useState<any>([]);

  function addPostHandler(postData: any) {
    setPosts((posts: any) => [...posts, postData]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {/* <button onClick={showModal}>Open</button> */}
      <ul className={classes.posts}>
        {posts.map((post: any) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
