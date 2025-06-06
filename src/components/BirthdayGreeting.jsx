import React from "react";
import { motion } from "framer-motion";

const BirthdayGreeting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1b24] via-[#2a0d43] to-[#0f0c29] flex flex-col justify-center items-center px-4 py-12 text-center snap-start">
      <div className="w-full max-w-screen-sm">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 font-[Dancing_Script] text-pink-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Special Audio Message 🎧. Kaa peke yako, Utacheka sana Nimekuonya 😄😂.
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
          <source src="/audio/Birthday-greeting.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </motion.audio>
      </div>
    </div>
  );
};

export default BirthdayGreeting;
