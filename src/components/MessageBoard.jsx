import React from "react";

const messages = [
  `As i was thinking of a birthday gift 🎁....I've thought about you the whole week, what to gift you, and i decided to build a website.`,
  `Long distance sucks....Wish i wass there, But i wanted to gift you with something that i hope you'll remember longer than any gift(Kasoro labda hio gift nikuletee zawadi na maua najua utaikumbuka zaidi 😂).`,
  `I hope it is cute enough to make you smile and make your day on your birthday. 💖`,
  `Coming soon.... me and you, finally sitting together, enjoying bday like no other and many other activities Inshallah. Here's to more memories with you.`,
  `Till then, let this site be the appetizer for you, I know it's not much but bear with me OK.`
];

const MessageBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#3a0ca3] to-[#4a148c] flex flex-col justify-center items-center px-4 text-center snap-start">
      <h2 className="text-4xl font-bold mb-6 font-[Dancing Script] text-yellow-300">
        Messages for you: Birthday Girl 💘
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {messages.map((reason, index) => (
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

export default MessageBoard;