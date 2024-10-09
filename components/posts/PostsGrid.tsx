import Post from "@/models/post.model";
import classes from "./PostGrid.module.css";
import PostItem from "./PostItem";

function PostsGrid({ posts }: { posts: Post[] }) {

  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}

export default PostsGrid;
