import React from "react";
import { motion } from "framer-motion";

const comicPanels = [
  {
    id: 1,
    srcJpeg: "/images/image5.jpg",
    alt: "Comic panel 1 - Our first meeting",
    caption:
      "Birthday girl mpaka sa hv ananidai hii...Tena hii nnatakiwa ninunue isije akanunua wa kwanza itakuwa too much loss man for me especially hii. What are you doing Fizo, Buy for her. And she will suprise you, man",
  },
  {
    id: 2,
    srcJpeg: "/images/image6.jpg",
    alt: "Comic panel 2 - Laughing together",
    caption: "Usifikirie nimesahau..... 😄😂",
  },
  {
    id: 3,
    srcJpeg: "/images/image3.jpg",
    alt: "Comic panel 3 - Heartfelt moments",
    caption:
      "She sent me this pic… 🍽️😋 Hey, I fell in love with the food right there, I was drooling 🤤. It would be so good if we eat together this 💖.",
  },
  {
    id: 4,
    srcJpeg: "/images/image4.jpg",
    alt: "Memories....",
    caption: "Other memories coming soon... Here's to more memories together 😂",
  },
];

const ComicStrip = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1b24] via-[#3a0ca3] to-[#4a148c] flex flex-col items-center px-4 py-12 text-center overflow-y-auto snap-start">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-pink-200 font-[Dancing_Script]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Little Story 📖
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl px-2">
        {comicPanels.map(({ id, srcJpeg, alt, caption }) => (
          <motion.figure
            key={id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 font-[Caveat]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <picture>
              <source srcSet={srcJpeg} type="image/jpeg" />
              <img
                src={srcJpeg}
                alt={alt}
                className="rounded-lg w-full h-40 sm:h-60 object-cover"
                loading="lazy"
                style={{ aspectRatio: "4 / 3" }}
              />
            </picture>
            <figcaption className="mt-4 text-pink-200 font-semibold text-lg sm:text-xl md:text-2xl font-[Dancing_Script]">
              {caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
};

export default ComicStrip;
