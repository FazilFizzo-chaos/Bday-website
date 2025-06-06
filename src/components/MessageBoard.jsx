import React from "react";

const messages = [
  `As I was thinking of a birthday gift 🎁... I've thought about you the whole week, what to gift you, and I decided to build a website.`,
  `Long distance sucks... 😞💔 Wish I was there 🥺. But I wanted to gift you with something that I hope you'll remember longer than any gift 🎁✨ (Kasoro labda hio gift nikuletee zawadi na maua 🌹🎁 najua utaikumbuka zaidi 😂).`,
  `I hope it is cute enough to make you smile 😊 and make your day on your birthday. 🎂💖🎈`,
  `Coming soon... 🕰️ me and you 🫶, finally sitting together 🪑✨, enjoying bday like no other 🎂🎉 and many other activities 🏞️🍿🚴 Inshallah 🤲. Here's to more memories with you 💖📸.`,
  `Till then, let this site be the appetizer for you 🍽️💻. I know it's not much 🙈 but bear with me, OK? 🤍😊`
];

const MessageBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#3a0ca3] to-[#4a148c] flex flex-col justify-center items-center px-4 py-12 text-center snap-start">
      <h2 className="text-3xl sm:text-4xl font-bold font-[Dancing_Script] text-yellow-600 mb-6">
        Messages for you: Birthday Girl 💘
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-2">
        {messages.map((reason, index) => (
          <div
            key={index}
            className="bg-white/10 border border-pink-200/20 rounded-xl shadow-lg p-4 sm:p-6 text-white hover:scale-105 transition duration-300"
          >
            <p className="font-[Caveat] text-pink-200 text-lg sm:text-xl">
              {reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
