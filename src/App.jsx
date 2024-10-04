import "./App.css";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import HeroSection from "./components/main/HeroSection";
import ServicesSection from "./components/main/ServicesSection";

function App() {
  return (
		<div style={{ backgroundColor: '#fff5fb' }}>
			<Header />
			<HeroSection />
			<ServicesSection />
			<Footer />
		</div>
	)
}

export default App;
