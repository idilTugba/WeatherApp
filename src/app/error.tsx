"use client";
import { BoltIcon } from "@heroicons/react/20/solid";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white font-bold text-6xl">
      <BoltIcon className="h-24 w-24 animate-bounce text-yellow-500" />
      <h1 className="text-6xl mt-10 text-center text-bold animate-pulse">
        Ups! There is some problem but we will fix it. Promise.
      </h1>
    </div>
  );
};

export default Error;
