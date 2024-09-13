import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

const HomeSearchButton: FC = () => {
  return (
    <div>
      <Link
        href="/search"
        className="bg-blue-500 hover:bg-blue-600 py-2 px-4 border-gray-400 rounded shadow w-max border mt-10 flex flex-row font-semibold text-white"
      >
        <span className=" mr-3">Search posts</span>
        <Image
          src="/assets/search.webp"
          alt="search icon"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};

export default HomeSearchButton;
