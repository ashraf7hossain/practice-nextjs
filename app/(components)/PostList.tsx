"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://6703d4d4ab8a8f892731d5c5.mockapi.io/posts"
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])

  async function addPostHandler(postData: any) {
    await fetch("https://6703d4d4ab8a8f892731d5c5.mockapi.io/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post: any) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div>
          <h2>No posts yet!</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
