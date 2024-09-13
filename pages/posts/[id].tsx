import Post from "@/src/components/Post";
import BackToHome from "@/src/components/BackToHome";
import { fetchPost } from "../../src/services/fetchPost";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React, { FC } from "react";
import {IPost} from "../../src/interfaces/post.interface"

interface PostPageProps {
  post: IPost | null;
  error?: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
):Promise<GetServerSidePropsResult<PostPageProps>> => {
  const { id } = context.query;
  try {
    const post = await fetchPost(id as string);

    if (!post) {
      return { notFound: true };
    }

    return {
      props: {
        post: post,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
};

const PostPage: FC<PostPageProps> = ({ post, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }
  return post ? (
    <Post postData={post} />
  ) : (
    <div>
      <p>Can not find the post</p>
      <BackToHome />
    </div>
  );
};

export default PostPage;
