import React from "react";
import { motion } from "framer-motion";

const comicPanels = [
  {
    id: 1,
    srcJpeg: "/images/image1.jpg",
    alt: "Comic panel 1 - Our first meeting",
    caption: "When we first met and clicked instantly 💬",
  },
  {
    id: 2,
    srcJpeg: "/images/image2.jpg",
    alt: "Comic panel 2 - Laughing together",
    caption: "Laughing till our cheeks hurt 😄",
  },
  {
    id: 3,
    srcJpeg: "/images/image3.jpg",
    alt: "Comic panel 3 - Heartfelt moments",
    caption: "Sharing secrets and dreams 💖",
  },
  {
    id: 4,
    srcJpeg: "/images/image4.jpg",
    alt: "Comic panel 4 - Goofy moments",
    caption: "You being your goofy self 😂",
  },
];

const ComicStrip = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1b24] via-[#3a0ca3] to-[#4a148c] flex flex-col items-center px-4 py-12 text-center overflow-y-auto snap-start">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-pink-200 font-[Dancing Script]"
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
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4"
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
                className="rounded-lg w-full h-60 object-cover"
                loading="lazy"
                style={{ aspectRatio: "4 / 3" }}
              />
            </picture>
            <figcaption className="mt-4 text-pink-100 font-semibold text-lg">
              {caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
};

export default ComicStrip;
