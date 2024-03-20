import Hero from "./Components/Sections/Hero";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Navigation/Footer";
import DetailsSec from "./Components/Sections/DetailsSec";
import Services from "./Components/Sections/Services";
function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DetailsSec />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
