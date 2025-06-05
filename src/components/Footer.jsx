import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0f0c29] via-[#1f1b24] to-transparent text-center text-pink-200 px-4 py-6 mt-12">
      <div className="flex justify-center items-center gap-2 mb-2">
        <HeartIcon className="w-5 h-5 text-red-400 animate-pulse" />
        <span className="font-[Dancing_Script] text-lg sm:text-xl">
          Made with love, just for you 💕
        </span>
      </div>
      <p className="text-sm sm:text-base text-pink-300/80">
        &copy; {new Date().getFullYear()} Our Little Story · All wishes reserved ✨
      </p>
    </footer>
  );
};

export default Footer;
