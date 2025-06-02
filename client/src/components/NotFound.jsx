import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col  justify-center items-center h-[100vh]">
      <img
        src="/assets/images/NotFound.jpg"
        alt="Not Found"
        height={300}
        width={300}
      />
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="font-bold text-5xl">Sorry,</h1>
        <p className="text-xl">we're working on it</p>
        <p className="text-xs">and we'll get it fixed as soon as we can</p>
      </div>
    </div>
  );
};

export default NotFound;
