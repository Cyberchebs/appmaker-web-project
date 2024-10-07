import "./App.css";
import Aboutus from "./components/main/Aboutus";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import HeroSection from "./components/main/HeroSection";
import PortfolioSection from "./components/main/PortfolioSection";
import ServicesSection from "./components/main/ServicesSection";
import Testimonials from "./components/main/Testimonials";

function App() {
  return (
    <div style={{ backgroundColor: "#fff5fb" }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Aboutus />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
