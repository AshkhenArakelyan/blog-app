import type { NextApiRequest, NextApiResponse } from "next";
import {IPost} from "../../src/interfaces/post.interface"

export default async function searchPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search } = req.query as { search?: string };
  try {
    const response = await fetch(`${process.env.JSON_PLACEHOLDER_BASE_URL}`);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch posts from external API." });
    }

    const posts: IPost[] = await response.json();

    const filteredPosts = posts.filter((post: IPost) =>
      post.title.toLowerCase().includes((search as string).toLowerCase())
    );

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error("Error fetching or filtering posts:", error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
}
