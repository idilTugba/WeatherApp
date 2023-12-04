import { FaceFrownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white font-bold text-6xl">
      <FaceFrownIcon className="h-24 w-24 animate-bounce duration-75 text-red-500" />
      <h2 className="text-4xl">Sorry! Page Not Found</h2>
      <Link className="text-2xl text-gray-400 hover:text-white mt-7" href="/">
        Return Home
      </Link>
    </div>
  );
}
