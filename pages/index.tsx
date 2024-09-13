import React from "react";
import PostCard from "../src/components/PostCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {fetchPosts} from "../src/services/fetchPosts"
import {IPost} from "../src/interfaces/post.interface"
import HomeSearchButton from "@/src/components/HomeSearchButton";

export const getServerSideProps:GetServerSideProps = (async () => {
  try {
    const posts = await fetchPosts();
    return { props: { posts }};
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: { posts: [], error: "Failed to load posts" } };
  }
})

const Home = ({posts=[], error}: InferGetServerSidePropsType<typeof getServerSideProps> ) => {

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <HomeSearchButton />
      <h1 className="text-2xl text-center uppercase my-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {posts && posts.length > 0 ? (
          posts.map((post: IPost) => (
            <PostCard
              key={post.id}
              postData={post}
            />
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Home;
