import Image from "next/image"
import classes from "./PostHeader.module.css"
import Post from "@/models/post.model"

function PostHeader({ post }: { post: Post }) {
  const { title } = post;

  return (
    <header className={classes.header}>
      <h1> { title }</h1>
      <Image src = {post.image} alt={title} width={200} height={120}/>
    </header>
  )
}

export default PostHeader