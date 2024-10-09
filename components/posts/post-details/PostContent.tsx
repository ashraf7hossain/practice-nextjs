import Post from "@/models/post.model"
import PostHeader from "./PostHeader"
import classes from "./PostContent.module.css"
import React from "react"
import ReactMarkdown from "react-markdown"


const DUMMY_POST: Post = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJS",
  image: "https://lipsum.app/640x480/",
  excerpt: "Next js is a React framework for production web apps",
  content: '# This is first post',
  date: "2022-02-10",
}
function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader post={DUMMY_POST}/>
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent