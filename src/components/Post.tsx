import React from "react";
import BackToHome from "./BackToHome";
import {IProps} from "../interfaces/props.interface"

const Post = ({ postData }: IProps): JSX.Element => {

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold mb-4 text-gray-600">
        {postData.title}
      </h2>
      <p className="text-gray-800 mb-5">{postData.body}</p>
      <BackToHome />
    </div>
  );
};

export default Post;
