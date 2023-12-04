"use client";
import { CloudIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const Loading = () => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon + 1) % 3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white font-bold text-6xl">
      {currentIcon === 0 && (
        <SunIcon className="h-24 w-24 animate-bounce duration-75 text-yellow-500" />
      )}
      {currentIcon === 1 && (
        <MoonIcon className="h-24 w-24 animate-bounce duration-75 text-blue-300" />
      )}
      {currentIcon === 2 && (
        <CloudIcon className="h-24 w-24 animate-bounce duration-75 text-white" />
      )}
      <h1 className="text-6xl mt-10 text-center text-bold">
        Loading City Weather Information
      </h1>
      <h1 className="text-xl text-center mt-10 text-bold">
        Hold on, we are crunching information & generation an AI summary of the
        weather!
      </h1>
    </div>
  );
};

export default Loading;
