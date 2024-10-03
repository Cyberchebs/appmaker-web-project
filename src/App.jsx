import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
      {/* it works  */}
      <h1 className="text-xl bg-slate-400">hello world</h1>
    </>
  );
}

export default App;
