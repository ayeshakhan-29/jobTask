import Hero from "./Components/Sections/Hero";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Navigation/Footer";
import DetailsSec from "./Components/Sections/DetailsSec";
import Services from "./Components/Sections/Services";
import Contact from "./Components/Sections/Contact";
import Sponsors from "./Components/Sections/Sponsors";
import Reviews from "./Components/Sections/Reviews";

function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DetailsSec />
      <Services />
      <Sponsors />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
