import React from "react";
import { motion } from "framer-motion";

const BirthdayGreeting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1b24] via-[#2a0d43] to-[#0f0c29] flex flex-col justify-center items-center px-4 py-12 text-center snap-start">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6 font-[Dancing_Script] text-pink-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Special Audio Message 🎧
      </motion.h2>

      <motion.audio
        controls
        preload="metadata"
        aria-label="Happy birthday voice message"
        className="w-full max-w-xs sm:max-w-md rounded-lg shadow-xl bg-white/10 backdrop-blur border border-pink-200/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <source src="/audio/happy-birthday-message.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </motion.audio>
    </div>
  );
};

export default BirthdayGreeting;

  