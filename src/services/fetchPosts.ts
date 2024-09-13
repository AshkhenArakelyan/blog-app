import {IPost} from "../interfaces/post.interface"

export async function fetchPosts(): Promise<IPost[]> {
  const baseUrl = process.env.JSON_PLACEHOLDER_BASE_URL;
  if (!baseUrl) {
    throw new Error("Base URL is not defined.");
  }
  try {
    const data = await fetch(baseUrl);
    if (!data.ok) {
      throw new Error(`Network response was not ok: ${data.statusText}`);
    }
    return data.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
