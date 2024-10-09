import Post from "@/models/post.model"
import classes from "./AllPosts.module.css"
import PostsGrid from "./PostsGrid"

function AllPosts( { posts }: { posts: Post[]} ) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={ posts }/>
    </section>
  )
}

export default AllPosts