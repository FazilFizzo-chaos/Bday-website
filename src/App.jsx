import React from "react";
import HeroSection from "./components/HeroSection";
import LoveReasonsCarousel from "./components/LoveReasonsCarousel.jsx";
import WishUponAStar from "./components/WishUponAStar";
import ComicStrip from "./components/ComicStrip";
// import BirthdayGreeting from "./components/BirthdayGreeting";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth text-white">
      <HeroSection />
      <ComicStrip />
      <LoveReasonsCarousel />
      <WishUponAStar />
      <Footer />
    </main>
  );
}


export default App;
