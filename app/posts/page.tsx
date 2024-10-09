import AllPosts from '@/components/posts/AllPosts'
import Post from '@/models/post.model'
import React from 'react'

const DUMMY_POSTS: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "https://lipsum.app/640x480/",
    excerpt: "Next js is a React framework for production web apps",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting started with NextJS 2",
    image: "https://lipsum.app/640x480/",
    excerpt: "Nest js is a React framework for production web apps",
    date: "2022-02-10",
  },
]
function Posts() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default Posts