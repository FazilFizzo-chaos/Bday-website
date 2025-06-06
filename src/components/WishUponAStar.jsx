import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const birthdayWishes = [
  "Next birthday, you are getting a date I promise not just sweet words. Hanging out together.",
  "You are awarded with lots of love and cake from Fizo 💖🎁🎂",
  "No surprises here!!! Haha 😂 Try other stars maybe.",
  "I'll always try to make you happy. If it is in my capability, I will always make you smile. 💖",
  "This website nmeweka makopa mengi, Umeninywesha za kutosha mpaka na mimi natumia 😂, Bear with me haha."
];

const WishUponAStar = () => {
  const [selectedWish, setSelectedWish] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#1f1b24] to-[#0f0c29] flex flex-col justify-center items-center px-4 py-12 text-center snap-start relative">
      <div className="w-full max-w-screen-sm">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-2 font-[Dancing_Script] text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Wish Upon a Star 🌠
        </motion.h2>

        <p className="text-sm sm:text-base text-yellow-100 mb-6">
          Tap a star to reveal a birthday surprise ✨
        </p>

        <div className="flex flex-wrap justify-center gap-5 max-w-xs sm:max-w-md mx-auto">
          {birthdayWishes.map((quote, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedWish(quote)}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Reveal wish ${idx + 1}`}
              className="w-12 h-12 sm:w-14 sm:h-14 aspect-square bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-yellow-300/30 hover:bg-yellow-200/10 transition shadow-lg"
            >
              <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
            </motion.button>
          ))}
        </div>

        {selectedWish && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 sm:mt-8 px-4 py-3 sm:px-6 sm:py-4 max-w-xs sm:max-w-md mx-auto text-center text-pink-100 bg-white/10 border border-pink-200/20 rounded-xl shadow-xl backdrop-blur"
          >
            <p className="text-base sm:text-lg">{selectedWish}</p>
          </motion.div>
        )}

        <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300 mt-10 animate-bounce mx-auto" />
      </div>

      {/* Star Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 sm:opacity-50">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 0.5 + 0.3}
              fill="white"
              opacity={Math.random() * 0.5 + 0.3}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default WishUponAStar;
