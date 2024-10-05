import "./App.css";
import Aboutus from "./components/main/Aboutus";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import HeroSection from "./components/main/HeroSection";
import PortfolioSection from "./components/main/PortfolioSection";
import ServicesSection from "./components/main/ServicesSection";

function App() {
  return (
    <div style={{ backgroundColor: "#fff5fb" }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
