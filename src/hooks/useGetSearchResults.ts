import { useEffect, useState } from "react";
import { IPost } from "../interfaces/post.interface";

const useGetSearchResults = (searchText: string) => {
  const [searchResults, setSearchResults] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

    if (!searchText) return;
    const getResults = async () => {
      setLoading(true);
      try {
        const searchResponse = await fetch(`/api/search?search=${searchText}`);
        if (!searchResponse.ok) {
          throw new Error("Failed to fetch search results");
        }
        const searchResults:IPost[] = await searchResponse.json();
        setSearchResults(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [searchText]);

  return { searchResults, loading };
};

export default useGetSearchResults;
