import Post from '@/models/post.model';
import PostsGrid from '../posts/PostsGrid';
import classes from './FeaturedPosts.module.css';

function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts;