import {IPost} from "../interfaces/post.interface"

export async function fetchPost(id:string | string[] | undefined): Promise<IPost | null> {
  const baseUrl = process.env.JSON_PLACEHOLDER_BASE_URL;
  if (!baseUrl) {
    throw new Error("Base URL is not defined.");
  }
  try {
    const data = await fetch(
      `${baseUrl}/${id}`
    );
    if (!data.ok) {
      throw new Error(`Network response was not ok: ${data.statusText}`);
    }
    return data.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}