import React from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1b24] via-[#3a0ca3] to-[#4a148c] flex flex-col justify-center items-center px-4 text-center overflow-hidden snap-start">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold text-pink-300 drop-shadow-lg font-[Dancing Script]"
      >
        Happy Birthday 🎉
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-2xl md:text-3xl mt-4 text-pink-100"
      >
        To the most special girl in my life 💖
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10"
      >
        <ConfettiExplosion force={0.8} duration={9000} particleCount={250} width={1600} />
      </motion.div>
    </div>
  );
};

export default HeroSection;