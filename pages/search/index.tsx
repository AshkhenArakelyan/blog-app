import Loading from "@/src/components/Loading";
import PostCard from "@/src/components/PostCard";
import useGetSearchResults from "@/src/hooks/useGetSearchResults";
import React,{ useRef, useState } from "react";
import { IPost } from "../../src/interfaces/post.interface";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchText, setSearchText] = useState<string>("");
  const [emptySearch, setEmptySearch] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const { searchResults, loading } = useGetSearchResults(searchText);

  const handleSearch = async () => {
    setButtonClicked(true);
    if (inputRef.current && inputRef.current.value !== "") {
      setSearchText(inputRef.current.value);
      setEmptySearch("");
    } else {
      setEmptySearch("Enter search text");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col mt-10 items-center">
        <div className="flex flex-row  ">
          <input
            className="shadow appearance-none border rounded-tl-md rounded-l-md focus:outline-gray-300 focus:outline-1 p-2 text-gray-700"
            id="username"
            type="text"
            placeholder="Search..."
            ref={inputRef}
          />

          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border-gray-400 rounded-r-md shadow w-max"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <span className="mt-3 text-red-600">{emptySearch}</span>
      </div>

      <div className="md:w-5/6 lg:w-3/5 m-auto">
        {searchResults.length ? (
          searchResults.map((post: IPost) => {
            return (
              <PostCard
                postData={post}
                key={post.id}
              />
            );
          })
        ) : buttonClicked && !searchResults.length && !emptySearch.length ? (
          <span>No exact matches found</span>
        ) : null}
      </div>
    </>
  );
};

export default Search;
