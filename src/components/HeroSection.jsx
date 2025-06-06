import React from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1f1b24] via-[#3a0ca3] to-[#4a148c] flex flex-col justify-center items-center px-4 text-center overflow-hidden snap-start">
      <div className="w-full max-w-screen-sm">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-300 drop-shadow-lg font-[Dancing_Script]"
        >
          Happy Birthday, Tiffa 🎉
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl mt-4 text-pink-100 font-[Caveat]"
        >
          Hope your day is filled with all the smiles you give me every day 💫, 
          Your smile? Nimekuona mara chache— can’t get enough, and I wouldn’t want to!🔥
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10"
      >
        <ConfettiExplosion
          force={0.8}
          duration={9000}
          particleCount={250}
          width={window.innerWidth} // responsive width
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
