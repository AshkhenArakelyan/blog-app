import React from "react";
import BackToHome from "@/src/components/BackToHome";
import { FC } from "react";

const Custom404: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-10">404 - Page Not Found</h1>
      <BackToHome />
    </div>
  );
}

export default Custom404