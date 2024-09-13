import Image from "next/image";
import React, { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center mt-10 w-full h-28">
      <Image src="/assets/loading.svg" width={100} height={100} alt="loading" className="h-full"/>
    </div>
  );
};

export default Loading;
