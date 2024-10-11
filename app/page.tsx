import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import Post from "@/models/post.model";
import Head from "next/head";

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
export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  );
}
