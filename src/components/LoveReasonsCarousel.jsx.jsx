import React from "react";

const reasons = [
  "Your smile lights up my darkest days.",
  "You’re incredibly thoughtful and kind.",
  "You make everything more fun and exciting.",
  "I love how passionate you are about your dreams.",
  "You're my safe space and greatest adventure."
];

const LoveReasonsCarousel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#3a0ca3] to-[#4a148c] flex flex-col justify-center items-center px-4 text-center snap-start">
      <h2 className="text-4xl font-bold mb-6 font-[Dancing Script] text-yellow-300">
        5 Reasons Why I Love You 💘
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white/10 border border-pink-200/20 rounded-xl shadow-lg p-6 text-white hover:scale-105 transition duration-300"
          >
            <p className="text-pink-300">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveReasonsCarousel;