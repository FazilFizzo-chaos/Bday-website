import HeroSection from "./components/HeroSection";
import MessageBoard from "./components/MessageBoard";
import WishUponAStar from "./components/WishUponAStar";
import ComicStrip from "./components/ComicStrip";
import BirthdayGreeting from "./components/BirthdayGreeting";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth text-white">
      <HeroSection />
      <BirthdayGreeting />
      <WishUponAStar />
      <MessageBoard />
      <ComicStrip /> 
      <Footer />
    </main>
  );
}


export default App;
