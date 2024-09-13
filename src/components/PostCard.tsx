import React from "react";
import Link from "next/link";
import useTrimText from "../hooks/useTrimText";
import {IProps} from "../interfaces/props.interface"

const PostCard = ({ postData }: IProps): JSX.Element => {
  const text = useTrimText(postData.body, 30);
  return (
    <div
      className="col-span-1 border-2 p-2 flex flex-col justify-between"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-600">{postData.title}</h2>
      <p className="text-gray-800 mb-5">{text}</p>
      <Link href={`/posts/${postData.id}`} className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border-gray-400 rounded shadow w-max">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
